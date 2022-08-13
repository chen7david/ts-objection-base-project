import { ModelService } from './base.service'
import { Role, RoleShape } from '../models/role.model'

export class RoleService extends ModelService<any> {
  async create(data: RoleShape): Promise<Role | null> {
    return super.create(data)
  }
}

export const roleService = new RoleService(Role)
