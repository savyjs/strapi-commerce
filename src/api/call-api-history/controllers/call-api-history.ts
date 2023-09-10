/**
 * call-api-history controller
 */

import {factories} from '@strapi/strapi'
import Zoho from "../../../helper/zoho";

export default factories.createCoreController('api::call-api-history.call-api-history', {
  async callZoho(ctx) {
    try {
      let zoho = new Zoho();
      let userRequestBody = ctx?.request?.body || {}
      let {type} = ctx?.request?.params
      const {method, url, data, headers} = userRequestBody
      if (method && url) {
        let responseObject = await zoho.callZohoAPI(type, method, url, data, headers);
        ctx.body = responseObject?.data
      } else {
        ctx.body = "request invalid. fields `method`, `url` and `data` are missing."
      }
    } catch (err) {
      ctx.body = err
    }
  }
});
