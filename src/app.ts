import { config } from './config/default.config'
import { userService } from './services/user.service'
import { roleService } from './services/role.service'

const run = async () => {
  const items = await userService.find(8, 2)
  // const item = await roleService.create({
  //   name: "tucasn",
  //   description: "hello",
  // })
  console.log({ items })
}

run()
