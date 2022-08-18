import { ModelService } from './base.service'
import { Permission } from '../models/permission.model'
import { ModelClass } from 'objection'

export class PermissionService extends ModelService<ModelClass<Permission>> {}

export const permissionService = new PermissionService(Permission)
