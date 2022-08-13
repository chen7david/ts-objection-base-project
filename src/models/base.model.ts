import { Model as BaseModel } from 'objection'
import pluralize from 'pluralize'
import { store } from '../database/connection'
import { snakeCase } from 'lodash'

BaseModel.knex(store)

class Model extends BaseModel {
  static get tableName(): string {
    return pluralize(snakeCase(this.name))
  }
}

export default Model
