const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
  type Query {
    getAllInfluencers: [Influencer]!
  }

  type Mutation {
    addInfluencer(
      firstName: String!
      lastName: String!
      username: String!
      instagram: String!
      email: String!
      password: String!
      joinDate: String
    ): Influencer
  }

  type Client {
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
    hotelName: String!
    phone: Int!
    location: String!
    joinDate: String
  }

  type Influencer {
    firstName: String!
    lastName: String!
    username: String!
    instagram: String!
    password: String!
    email: String!
    joinDate: String
  }
`;
