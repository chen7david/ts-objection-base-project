import { config } from './config/default.config'
import { userService } from './services/user.service'
import { roleService } from './services/role.service'
import { User } from './models/user.model'

const run = async () => {
  const users = await userService.find(1, 2)
  const user = await userService.findOne(1)
  // const updatedUser = await userService.patch(1, { username: 'Albert' })
  // const deleteddUser = await userService.delete(1)
  const userByUsername = await userService.findByUsername('david')
  console.log({users, user, userByUsername})
  // if(item) item.verifyPassword()
  // await userService.unrelate(2, 'roles', 3)
  // const relations = await userService.getRelated(2, 'roles')
  // const items = await userService.patch(5, { email: "awala@do.com"})
  // const item = await roleService.create({
  //   name: "tucasn",
  //   description: "hello",
  // })
  // console.log({items, relations})
}

run()
