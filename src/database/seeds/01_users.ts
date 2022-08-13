import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del()

  // Inserts seed entries
  await knex('users').insert([
    {
      id: 1,
      user_id: 'ceda0dd89ca64bbbd9faf06a94b173e0',
      username: 'david',
      email: 'a@b.com',
      password: '$2b$12$sXVIRlWA6JuPvJgff.jqFeSg.fynjKVPtjwxDcJaQCcMwk5vx97o',
    },
    {
      id: 2,
      user_id: '5bd71123406a784da249c2b9a49233d3',
      username: 'max',
      email: 'a@c.com',
      password: '$2b$12$sXVIRlWA6JuPvJgff.jqFeSg.fynjKVPtjwxDcJaQCcMwk5vx97o',
    },
    {
      id: 3,
      user_id: '90345a7e4487ef8af27856430913a511',
      username: 'vanessa',
      email: 'a@d.com',
      password: '$2b$12$sXVIRlWA6JuPvJgff.jqFeSg.fynjKVPtjwxDcJaQCcMwk5vx97o',
    },
    {
      id: 4,
      user_id: 'd666f0383bd006d9ba0d2c1a81e0ec4b',
      username: 'denise',
      email: 'a@e.com',
      password: '$2b$12$sXVIRlWA6JuPvJgff.jqFeSg.fynjKVPtjwxDcJaQCcMwk5vx97o',
    },
    {
      id: 5,
      user_id: '4e66c365808de67bcb43c8a66ca675c3',
      username: 'andy',
      email: 'a@f.com',
      password: '$2b$12$sXVIRlWA6JuPvJgff.jqFeSg.fynjKVPtjwxDcJaQCcMwk5vx97o',
    },
  ])
}
