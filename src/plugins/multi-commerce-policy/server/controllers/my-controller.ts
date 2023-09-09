import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('multi-commerce-policy')
      .service('myService')
      .getWelcomeMessage();
  },
});
