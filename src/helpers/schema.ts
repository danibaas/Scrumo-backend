import { gql } from "apollo-server-express";

export const typeDefs = gql`

type Query {
    me: User
}

type User {
    name: String
}
`;