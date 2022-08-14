import { Model as BaseModel, NonFunctionPropertyNames } from 'objection'
import pluralize from 'pluralize'
import { store } from '../database/connection'
import { snakeCase } from 'lodash'

BaseModel.knex(store)

export class Model extends BaseModel {
  static get tableName(): string {
    return pluralize(snakeCase(this.name))
  }
}

export default Model

export type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>
export type ModelObject<T> = Omit<NonFunctionProperties<T>, 'QueryBuilderType'>
