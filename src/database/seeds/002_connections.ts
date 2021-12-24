import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('connections').insert([
    { user_id: 1 },
    { user_id: 2 },
    { user_id: 3 },
    { user_id: 4 },
  ]);
}