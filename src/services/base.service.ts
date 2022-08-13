import type { ModelClass } from 'objection'

export class ModelService<T extends ModelClass<any>> {
  model: T
  constructor(model: T) {
    this.model = model
  }

  async find(): Promise<T[]> {
    return this.model.query()
  }

  async findOne(id: number | string): Promise<T | null> {
    return this.findOneByKey('id', id)
  }

  async findOneByKey(key: string, value: string | number): Promise<T | null> {
    return this.model.query().where(key, value).first()
  }

  async create(data: T) {
    return this.model.query().insert(data)
  }
}
