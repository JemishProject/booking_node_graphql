import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String!
    sellers: [Seller!]!
  }

  type Seller {
    id: ID!
    email: String!
    password: String!
  }

  type Mutation {
    createSeller(email: String!, password: String!): Seller!
  }
`;
