import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('permissions').del()

  // Inserts seed entries
  await knex('permissions').insert([
    { id: 1, name: 'index:users' },
    { id: 2, name: 'view:user' },
    { id: 3, name: 'create:users' },
    { id: 4, name: 'update:users' },
    { id: 5, name: 'delete:users' },
  ])
}
