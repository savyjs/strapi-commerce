/**
 * owner policy
 */

export default (policyContext, config, { strapi }) => {
    // Add your own logic here.
    strapi.log.info('In owner policy.');

    const canDoSomething = true;

    if (canDoSomething) {
      return true;
    }

    return false;
};
