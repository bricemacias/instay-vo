import { gql } from 'apollo-server-express';

const HotelOwnerSchema = gql`
  # Model Objects

  type HotelOwner {
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    phone: Int!
    hotels: [Hotel]
    password: String!
    joinDate: String
  }

  # Queries

  extend type Query {
    getAllHotelOwners: [Influencer]!

    getCurrentHotelOwner: Influencer
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
