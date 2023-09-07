/**
 * store policy
 */

export default (policyContext, config, { strapi }) => {
    // Add your own logic here.
    strapi.log.info('In store policy.');

    const canDoSomething = true;

    if (canDoSomething) {
      return true;
    }

    return false;
};
