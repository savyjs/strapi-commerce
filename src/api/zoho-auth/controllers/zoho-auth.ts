/**
 * zoho-auth controller
 */

import {factories} from '@strapi/strapi'
import zoho from "../../../helper/zoho";


export default factories.createCoreController('api::zoho-auth.zoho-auth', ({strapi}) => ({
  // Method 1: Creating an entirely custom action
  async generateAccessToken(ctx) {
    try {
      let ZohoResponse = await zoho.generateAccessToken()
      ctx.body = ZohoResponse?.error || ZohoResponse || "ok";
    } catch (err) {
      console.error({err})
      ctx.body = err;
    }
  },
  async refreshAccessToken(ctx) {
    try {
      let ZohoResponse = await zoho.refreshAccessToken()
      ctx.body = ZohoResponse?.error || ZohoResponse || "ok";
    } catch (err) {
      console.error(err)
      ctx.body = err;
    }
  }
}));

