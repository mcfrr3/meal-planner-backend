const sharedConfig = {
  client: 'better-sqlite3',
  useNullAsDefault: true,
  migrations: {
    directory: './data/migrations',
  },
  seeds: {
    directory: './data/seeds'
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done);
    },
  },
}

module.exports = {

  development: {
    ...sharedConfig,
    connection: {filename: './dev.sqlite3'}
  },

  production: {
    ...sharedConfig,
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
