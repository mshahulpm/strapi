module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '612b8f2cd0746d29ff0ef5a09adbf510'),
  },
});
