import { ModelService } from './base.service'
import { User } from '../models/user.model'

export class UserService extends ModelService<any> {
  async findByUsername(username: string): Promise<InstanceType<any> | null> {
    return this.findOneByKey('username', username)
  }
}

export const userService = new UserService(User)
