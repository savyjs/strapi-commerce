import FormData from "form-data";
import axios from "axios";

import env from "@strapi/utils/dist/env-helper";
import {Error} from "memfs/lib/internal/errors";

export default class Zoho {
  public url: string
  private client_id: string
  private client_secret: string

  async constructor() {
    this.url = env('ZOHO_ACCOUNT_API', 'https://accounts.zoho.com/oauth/v2/token')
    this.client_id = env('ZOHO_CLIENT_ID')
    this.client_secret = env('ZOHO_CLIENT_SECRET')
    if (!this.client_id || !this.url || !this.client_secret) throw new Error("ZOHO_ACCOUNT_API, ZOHO_CLIENT_SECRET, ZOHO_CLIENT_ID not found!")
  }

  async generateAccessToken() {

    let zohoAuth = await strapi.service("api::zoho-auth.zoho-auth").find();
    let code = zohoAuth?.code;
    if (!code) throw new Error("code not found!")

    let body = new FormData()

    body.append('client_id', this.client_id);
    body.append('client_secret', this.client_secret);
    body.append('code', code);
    body.append('grant_type', 'authorization_code');

    let config = {
      method: 'post',
      url: this.url,
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
      url: this.url,
      data: body
    };

    let data = await axios.request(config)
      .then((response) => {
        return response.data
      });
    if (data?.expires_in > 0) {
      data.expires_in = parseInt(data.expires_in) + (Date.now())
      delete data.code;
      delete data.refresh_token;
      await strapi.service("api::zoho-auth.zoho-auth").createOrUpdate({
        data
      })
    }
    return data;
  }
}
