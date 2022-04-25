import { createConnection, getConnectionOptions ,ConnectionOptions} from "typeorm";

export async function setupDatabase() {
  const options = await getConnectionOptions();

  console.log('establishing connection');

  await createConnection({
    ...options,
    host: "database_ignite",
  } as ConnectionOptions)

  console.log('connection established');
}