import {
  createConnection,
  getConnectionOptions,
  ConnectionOptions,
  Connection,
} from "typeorm";

// export async function setupDatabase() {
//   const options = await getConnectionOptions();

//   console.log("establishing connection");

//   await createConnection({
//     ...options,
//     host: "database_ignite",
//   } as ConnectionOptions);

//   console.log("connection established");
// }

export default async (host = "database_ignite"): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      host,
    })
  );
};
