import { config } from './config/default.config'
const add = (a: number, b: number): number => a + b
import { store } from './database/connection'

const run = async () => {
  const items = await store('roles')
  console.log(items)
}

run()

// const max = new Person()
class Person {
  name!: string
  constructor(name: string) {
    this.name = name
  }
}
