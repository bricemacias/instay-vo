import { gql } from 'apollo-server-express';

import TokenSchema from './Token';

const InfluencerSchema = gql`
  # Model Objects

  type Influencer {
    firstName: String!
    lastName: String!
    username: String!
    instagram: String!
    password: String!
    email: String!
    joinDate: String
  }

  # Queries

  extend type Query {
    getAllInfluencers: [Influencer]!
  }

  # Mutations

  extend type Mutation {
    addInfluencer(
      firstName: String!
      lastName: String!
      username: String!
      instagram: String!
      email: String!
      password: String!
      joinDate: String
    ): Influencer

    signupInfluencer(
      firstName: String!
      lastName: String!
      username: String!
      instagram: String!
      email: String!
      password: String!
    ): Token

    signinInfluencer(username: String!, password: String!): Token
  }
`;

export default InfluencerSchema;
