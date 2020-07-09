// The index file, run via "npm run serve";
import * as typeorm from "./helpers/typeorm";
import * as graphql from "./helpers/graphql";

typeorm.connect().then(async () => {
    console.log("Database connection is active.");
    graphql.connect().then(() => console.log("GraphQL active."));
});