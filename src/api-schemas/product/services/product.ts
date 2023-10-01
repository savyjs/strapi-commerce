/**
 * product service
 */

import { factories } from '@strapi/strapi';
// @ts-ignore Import module
import BasicProduct from 'https://raw.githubusercontent.com/savyjs/digimarket-nuxt-layer/master/schema/default/index.d.ts';
export default factories.createCoreService('api::product.product');


