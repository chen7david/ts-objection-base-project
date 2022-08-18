import { ModelService } from './base.service'
import { User } from '../models/user.model'
import { ModelClass } from 'objection'

export class UserService extends ModelService<ModelClass<User>> {
  async findByUsername(username: string): Promise<InstanceType<ModelClass<User>> | undefined> {
    return this.findOneByKey('username', username)
  }
}

export const userService = new UserService(User)
