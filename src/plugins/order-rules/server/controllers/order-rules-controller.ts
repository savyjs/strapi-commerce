import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('order-rules')
      .service('OrderRulesService')
      .getWelcomeMessage();
  },
  // Verify if an order is valid
  verify(ctx) {
    ctx.body = strapi
      .plugin('order-rules')
      .service('OrderRulesService')
      .getWelcomeMessage();
  },
});
