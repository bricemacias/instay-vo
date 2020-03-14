import { gql } from 'apollo-server-express';

const HotelOwnerSchema = gql`
  # Model Objects

  type HotelOwner {
    id: ID!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    phone: Int!
    hotels: [Hotel]
    password: String!
    joinDate: String
    verified: String
    hasAccess: String
  }

  # Queries

  extend type Query {
    getAllHotelOwners: [HotelOwner]!

    getCurrentHotelOwner: HotelOwner

    getHotelOwnerByUsername(username: String!): HotelOwner
  }

  # Mutations

  extend type Mutation {
    signupHotelOwner(
      firstName: String!
      lastName: String!
      username: String!
      email: String!
      phone: Int!
      password: String!
    ): Token

    signinHotelOwner(username: String!, password: String!): Token
  }
`;

export default HotelOwnerSchema;
