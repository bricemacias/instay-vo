import { gql } from 'apollo-server-express';

const HotelSchema = gql`
  # Model Objects
  type Hotel {
    id: ID!
    name: String!
    owner: HotelOwner!
    avatar: String
    coverImages: [String]
    location: String!
    description: String
    website: String!
    createdDate: String
  }

  # Queries

  extend type Query {
    getAllHotels: [Hotel]!

    getCurrentHotel: Hotel
  }

  # Mutations

  extend type Mutation {
    addHotel(
      name: String!
      owner: String!
      location: String!
      website: String!
      avatar: String
      coverImages: String
      descritpion: String
    ): Hotel
  }
`;

export default HotelSchema;
