import { Model, ModelObject } from './base.model'
import { User } from './user.model'
import { Permission } from './permission.model'

export class Role extends Model {
  id?: number
  name!: string
  description?: string
  users?: User[]
  permissions?: Permission[]

  static get relationMappings() {
    return {
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'roles.id',
          to: 'users.id',
          through: {
            from: 'user_roles.role_id',
            to: 'user_roles.user_id',
          },
        },
      },

      permissions: {
        relation: Model.ManyToManyRelation,
        modelClass: Permission,
        join: {
          from: 'roles.id',
          to: 'permissions.id',
          through: {
            from: 'role_permissions.role_id',
            to: 'role_permissions.permission_id',
          },
        },
      },
    }
  }
}

export type RoleShape = ModelObject<Role>
