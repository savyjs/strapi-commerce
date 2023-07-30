
export default {
  routes: [
    { // Path defined with a URL parameter
      method: 'POST',
      path: '/zoho-auth/generate-token',
      handler: 'zoho-auth.generateAccessToken',
    },
    { // Path defined with a regular expression
      method: 'POST',
      path: '/zoho-auth/refresh-token',
      handler: 'zoho-auth.refreshAccessToken',
    }
  ]
}
