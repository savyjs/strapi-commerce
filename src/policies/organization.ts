/**
 * organization policy
 */

export default (policyContext, config, { strapi }) => {
    // Add your own logic here.
    strapi.log.info('In organization policy.');

    const canDoSomething = true;

    if (canDoSomething) {
      return true;
    }

    return false;
};
