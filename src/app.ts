import { config } from './config/default.config'
const add = (a: number, b: number): number => a + b
import {  userService } from './services/user.service'
import {  roleService } from './services/role.service'

const run = async () => {
  const items = await roleService.findOne(1)
  // const item = await roleService.create({
  //   name: "tucasn",
  //   description: "hello",
  // })
  console.log({items})
}

run()
