import { ModelService } from './base.service'
import { Role, RoleShape } from '../models/role.model'
import { ModelClass } from 'objection'

export class RoleService extends ModelService<ModelClass<Role>> {
  async create(data: RoleShape): Promise<Role> {
    return super.create(data)
  }
}

export const roleService = new RoleService(Role)
