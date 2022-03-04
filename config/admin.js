module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '26322f80eb272cc533a8c48abba4e7a0'),
  },
});
