import type { Knex } from 'knex'
import { config } from '../config/default.config'
import { join } from 'path'

const dbConfig: { [key: string]: Knex.Config } = {
  development: {
    client: config.db.client,
    connection: {
      filename: join(__dirname, config.db.name!),
    },
    useNullAsDefault: true,
  },

  production: {
    client: config.db.client,
    connection: {
      database: config.db.name,
      user: config.db.user,
      password: config.db.pass,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
}

export default dbConfig
