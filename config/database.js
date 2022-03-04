module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "strapi-test-database.cta6s6tj2mqr.us-west-1.rds.amazonaws.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi-test-database"),
      user: env("DATABASE_USERNAME", "Postgres"),
      password: env("DATABASE_PASSWORD", "AnyTableL0wel"),
    },
    useNullAsDefault: true,
  },
});