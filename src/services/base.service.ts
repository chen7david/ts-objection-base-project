import type { ModelClass } from 'objection'
import { ApiError } from '../utils/error.utils'
import { paginate } from '../utils/format.utils'
export class ModelService<T extends ModelClass<any>> {
  model: T
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
}
