import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  getWelcomeMessage() {
    return 'Welcome to Strapi 🚀';
  },
  getWelcomeMessage2() {
    return 'Welcome to Strapi 2 🚀';
  },
});
