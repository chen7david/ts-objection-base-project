import { config } from './config/default.config'
import { userService } from './services/user.service'
import { roleService } from './services/role.service'

const run = async () => {
  const items = await userService.findOne(2)
  await userService.unrelate(2, 'roles', 3)
  const relations = await userService.getRelated(2, 'roles')
  // const items = await userService.patch(5, { email: "awala@do.com"})
  // const item = await roleService.create({
  //   name: "tucasn",
  //   description: "hello",
  // })
  console.log({items, relations})
}

run()
