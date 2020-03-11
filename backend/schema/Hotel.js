import { gql } from 'apollo-server-express';

const HotelSchema = gql`
  # Model Objects
  type Hotel {
    name: String!
    owner: HotelOwner!
    avatar: String
    coverImages: [String]
    location: String!
    description: String
    website: String!
    createdDate: String
  }
`;

export default HotelSchema;
