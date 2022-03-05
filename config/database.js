module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: "strapi-test-database.cta6s6tj2mqr.us-west-1.rds.amazonaws.com",
      port: 5432,
      database: "strapi-test-database",
      user: "Postgres",
      password: "AnyTableL0wel",
    },
    pool:{
      
    },
    useNullAsDefault: true,
  },
});