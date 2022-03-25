// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'docker_test',
      user: 'docker',
      password: 'docker',
    },
    migrations: {
      directory: `${__dirname}/src/database/migrations`,
      name: 'knex_migrations',
    },
  },
}
