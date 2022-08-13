import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("role_permissions").del();

  // Inserts seed entries
  await knex("role_permissions").insert([
    { id: 1, permission_id: 1, role_id: 1 },
    { id: 2, permission_id: 2, role_id: 1 },
    { id: 3, permission_id: 3, role_id: 1 },
    { id: 4, permission_id: 4, role_id: 1 },
  ]);
}
