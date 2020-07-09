import "reflect-metadata";
import { createConnection, Connection } from "typeorm";

export function connect(): Promise<Connection> {
    return new Promise((resolve) => {
        createConnection()
            .then((connection: Connection) => {
                resolve(connection);
            })
            .catch((error) => console.log(error));
    });
}