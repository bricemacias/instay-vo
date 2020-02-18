import { gql } from 'apollo-server-express';

const ClientSchema = gql`
  # Model Objects

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
`;

export default ClientSchema;
