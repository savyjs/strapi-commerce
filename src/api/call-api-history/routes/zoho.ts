export default {
  routes: [
    { // Path defined with a URL parameter
      method: 'POST',
      path: '/external-api/zoho/:type',
      handler: 'call-api-history.callZoho',
    }
  ]
}
