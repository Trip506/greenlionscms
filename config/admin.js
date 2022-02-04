module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '247fba1716b1f4546f5e591ca92846f8'),
  },
});
