import { type ModelClass, UniqueViolationError } from 'objection'
import { ApiError } from '../utils/error.utils'
import { paginate } from '../utils/format.utils'

export class ModelService<T extends ModelClass<any>> {
  public model: T

  constructor(model: T) {
    this.model = model
  }

  async find(page?: number, limit?: number): Promise<T[]> {
    const items = await this.model.query()
    return page ? paginate(items, page, limit) : items
  }

  async findOne(id: number | string): Promise<InstanceType<T> | null> {
    return this.findOneByKey('id', id)
  }

  async findOneByKey(key: string, value: string | number): Promise<InstanceType<T> | null> {
    return this.model.query().where(key, value).first()
  }

  async create(data: T): Promise<InstanceType<T> | null> {
    return this.model.query().insert(data)
  }

  async $patch(instance: InstanceType<T> | null, data: object): Promise<number> {
    if (!instance) throw ApiError.invalidId()
    return instance.$query().patch(data)
  }

  async patch(id: number | string, data: object): Promise<number> {
    const instance = await this.findOne(id)
    return this.$patch(instance, data)
  }

  async $delete(instance: InstanceType<T> | null): Promise<number> {
    if (!instance) throw ApiError.invalidId()
    return instance.$query().delete()
  }

  async delete(id: number | string): Promise<number> {
    const instance = await this.findOne(id)
    return this.$delete(instance)
  }

  /* RELATIONS */

  async $getRelated(instance: InstanceType<T> | null, relationName: string) {
    if (!instance) throw ApiError.invalidId()
    const instances = await instance.$relatedQuery(relationName)
    return instances
  }

  async getRelated(id: number | string, relationName: string) {
    const instance = await this.findOne(id)
    return this.$getRelated(instance, relationName)
  }

  async $relate(
    instance: InstanceType<T> | null,
    relationName: string,
    relationId: number | string
  ) {
    try {
      if (!instance) throw ApiError.invalidId()
      const instances = await instance.$relatedQuery(relationName).relate(relationId)
      return instances
    } catch (error) {
      if (error instanceof UniqueViolationError) {
        throw ApiError.badRequest('duplicate entries are not allowed')
      } else {
        throw ApiError.internal()
      }
    }
  }

  async relate(id: number | string, relationName: string, relationId: number | string) {
    const instance = await this.findOne(id)
    return this.$relate(instance, relationName, relationId)
  }

  async $unrelate(
    instance: InstanceType<T> | null,
    relationName: string,
    relationId: number | string
  ) {
    try {
      if (!instance) throw ApiError.invalidId()
      const instances = await instance
        .$relatedQuery(relationName)
        .unrelate()
        .where(relationName + '.id', relationId)
      return instances
    } catch (error) {
      throw ApiError.internal(error)
    }
  }

  async unrelate(id: number | string, relationName: string, relationId: number | string) {
    const instance = await this.findOne(id)
    return this.$unrelate(instance, relationName, relationId)
  }
}
