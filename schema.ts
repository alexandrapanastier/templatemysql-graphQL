import { gql } from 'apollo-server';

// Définition du schéma GraphQL
const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User!]!
  }
`;

export default typeDefs;
