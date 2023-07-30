export default {

  afterUpdate(event) {
    const { data, where, select, populate } = event.params;

    // let's do a 20% discount everytime
    console.log('afterUpdate',event.params.data.price);
  },

  afterCreate(event) {
    const { result, params } = event;
    console.log('afterCreate',event.params.data.price);

    // do something to the result;
  },
};
