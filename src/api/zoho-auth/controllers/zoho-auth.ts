/**
 * zoho-auth controller
 */

import {factories} from '@strapi/strapi'
import Zoho from "../../../helper/zoho";


export default factories.createCoreController('api::zoho-auth.zoho-auth', ({strapi}) => ({
  // Method 1: Creating an entirely custom action
  async generateAccessToken(ctx) {
    let zoho = new Zoho();
    try {
      let code = ctx.request.body?.code
      let ZohoResponse = await zoho.generateAccessToken(code)
      ctx.body = ZohoResponse?.error || ZohoResponse || "ok";
    } catch (err) {
      console.error({err})
      ctx.body = err;
    }
  },
  async refreshAccessToken(ctx) {
    try {
      let zoho = new Zoho();
      let ZohoResponse = await zoho.refreshAccessToken()
      ctx.body = ZohoResponse?.error || ZohoResponse || "ok";
    } catch (err) {
      console.error(err)
      ctx.body = err;
    }
  }
}));

