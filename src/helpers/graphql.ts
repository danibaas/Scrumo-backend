// Server can be started with: "npm run serve" This will launch a dev environment. nodemon required (npm install -g nodemon typescript)
import * as express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { User } from "../entities/User";
import { GraphQLList, buildSchema } from "graphql";
import { typeDefs } from "./schema";

export function connect(): Promise<Express.Application> {
    return new Promise((resolve) => {
        /*const schema = await buildSchema({
            resolvers: [],
            emitSchemaFile: true
        });*/
        const server = new ApolloServer({typeDefs});
        const app = express();
        server.applyMiddleware({app});
        app.listen({port: 4000}, () => {
            console.log("Server running on http://localhost:4000/graphql");
            resolve(app);
        });
    });
}