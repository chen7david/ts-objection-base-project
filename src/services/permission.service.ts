import { ModelService } from './base.service'
import { Role } from '../models/role.model'

export class RoleService extends ModelService<any> {}

export const roleService = new RoleService(Role)
