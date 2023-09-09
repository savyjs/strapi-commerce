export default [
  {
    method: 'POST',
    path: '/',
    handler: 'OrderRulesController.index',
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/verify/:id',
    handler: 'OrderRulesController.verify',
    config: {
      auth: false,
      policies: [],
    },
  },
];
