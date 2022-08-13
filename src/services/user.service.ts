import { ModelService } from './base.service'
import { User } from '../models/user.model'

export class UserService extends ModelService<any> {}

export const userService = new UserService(User)
