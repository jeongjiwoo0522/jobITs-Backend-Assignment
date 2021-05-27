import config from "./index";
import { ConnectionOptions } from "typeorm";

export const connectionOption: ConnectionOptions = {
  type: "mysql",
  host: config.mysql.dbHost,
  port: +config.mysql.dbPort,
  username: config.mysql.dbUser,
  password: config.mysql.dbPass,
  database: config.mysql.dbName,
  synchronize: false,
  logging: false,
  entities: []
}