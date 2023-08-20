import FormData from "form-data";
import axios from "axios";

import env from "@strapi/utils/dist/env-helper";
import {Error} from "memfs/lib/internal/errors";
import {CallApiHistory_Plain} from "../api/call-api-history/content-types/call-api-history/call-api-history";
import {retry} from "rxjs/operators";

export default class Zoho {
  public account_url: string
  public inventory_url: string
  public commerce_api_url: string
  public organizationid: string
  public commerce_domain: string
  private readonly client_id: string
  private readonly client_secret: string
  private access_token: string

  constructor() {
    this.inventory_url = env('ZOHO_INVENTORY_API', 'https://www.zohoapis.com/inventory/v1')
    this.commerce_api_url = env('ZOHO_COMMERCE_API', 'https://commerce.zoho.com/store/api/v1')
    this.organizationid = env('ZOHO_ORGANIZATION_ID', undefined)
    this.commerce_domain = env('ZOHO_COMMERCE_DOMAIN', undefined)
    this.account_url = env('ZOHO_ACCOUNT_API', 'https://accounts.zoho.com/oauth/v2/token')
    this.client_id = env('ZOHO_CLIENT_ID')
    this.client_secret = env('ZOHO_CLIENT_SECRET')
    if (!this.client_id || !this.account_url || !this.client_secret) throw new Error("ZOHO_ACCOUNT_API, ZOHO_CLIENT_SECRET or ZOHO_CLIENT_ID not found!")


    axios.interceptors.response.use(resp => resp, async error => {
      if (error.response.status === 401) {
        await this.refreshAccessToken()
      }
      // Return the original error if we can't handle it
      return Promise.reject(error);
    });

  }

  async generateAccessToken(code ?: string) {

    let zohoAuth = await strapi.service("api::zoho-auth.zoho-auth").find();
    if (!code) code = zohoAuth?.code;
    if (!code) throw new Error("code not found!")

    let body = new FormData()
    body.append('client_id', this.client_id);
    body.append('client_secret', this.client_secret);
    body.append('code', code);
    body.append('grant_type', 'authorization_code');

    let config = {
      method: 'post',
      url: this.account_url,
      data: body
    };

    let data = await axios.request(config)
      .then((response) => {
        return response.data
      });

    if (data?.expires_in > 0) {
      data.expires_in = parseInt(data.expires_in) + (Date.now())
      data.code = null;
      await strapi.service("api::zoho-auth.zoho-auth").createOrUpdate({
        data
      })
    }
    return data;
  }

  async refreshAccessToken() {
    let zohoAuth = await strapi.service("api::zoho-auth.zoho-auth").find();
    let refresh_token = zohoAuth?.refresh_token;
    if (!refresh_token) throw new Error("refresh_token not found!")

    let body = new FormData()
    body.append('client_id', this.client_id);
    body.append('client_secret', this.client_secret);
    body.append('refresh_token', refresh_token);
    body.append('grant_type', 'refresh_token');

    let config = {
      method: 'post',
      url: this.account_url,
      data: body
    };

    let data = await axios.request(config)
      .then((response) => {
        return response.data
      });
    if (data?.expires_in > 0) {
      data.expires_in = parseInt(data.expires_in) * 1000 + Date.now()
      delete data.code;
      delete data.refresh_token;
      await strapi.service("api::zoho-auth.zoho-auth").createOrUpdate({
        data
      })
    }
    return data;
  }

  async checkAccessToken() {
    let zohoAuth = await strapi.service("api::zoho-auth.zoho-auth").find();
    let refresh_token = zohoAuth?.refresh_token;
    if (!refresh_token) throw new Error("refresh_token not found!")
    let access_token = zohoAuth?.access_token;
    let expires_in = parseInt(zohoAuth?.expires_in);
    if (Date.now() >= expires_in) {
      console.log({cond: Date.now() >= expires_in, now: Date.now(), expires_in})
      await this.refreshAccessToken()
      console.log('refreshing token ...')
      await this.checkAccessToken()
    } else if (access_token) {
      this.access_token = access_token
    } else {
      throw new Error("zoho access_token not found!")
    }
    return this
  }

  async callZohoAPI(type: "commerce" | "inventory", method: "POST" | "GET" | "DELETE" | "PUT", url: string, data, headers: {}) {
    await this.checkAccessToken();
    let recordObject = <Partial<CallApiHistory_Plain>>{
      title: type,
      method,
      request_body: JSON.stringify(data || {})
    }
    headers = {
      Authorization: `Zoho-oauthtoken ${this.access_token}`,
      ...headers
    }

    if (type == "inventory") {
      recordObject.url = url.slice(0, 4) == 'http' ? url : this.inventory_url + url
    } else if (type == "commerce") {
      recordObject.url = url.slice(0, 4) == 'http' ? url : this.commerce_api_url + url
      if (recordObject.url.slice(0, 38) == 'https://commerce.zoho.com/store/api/v1') {
        headers['X-com-zoho-store-organizationid'] = this.organizationid
        // headers['X-ZOHO-Include-Formatted'] = true
      }
      // headers['domain-name'] = this.commerce_domain
    }

    let config = {
      method: method,
      headers,
      url: recordObject.url,
      data: data ? data : undefined
    };

    let response = await axios.request(config);
    recordObject.response_body = JSON.stringify(response.data)
    recordObject.status = response.status
    // await strapi.service("api::call-api-history.call-api-history").create(recordObject)
    return response;
  }
}
