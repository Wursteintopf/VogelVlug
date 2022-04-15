module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b50a40aba7add1df89a0c2a08b690217'),
  },
});
