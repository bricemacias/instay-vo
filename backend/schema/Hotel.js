import { gql } from 'apollo-server-express';

const HotelSchema = gql`
  # Model Objects
  type Hotel {
    id: ID!
    name: String!
    owner: ID!
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

    # getHotelsByOwner: [Hotel]!

    # getHotelByName: Hotel

    # getHotelById: Hotel
  }

  # Mutations

  extend type Mutation {
    addHotel(
      name: String!
      owner: ID!
      location: String!
      website: String!
      avatar: String
      coverImages: String
      description: String
    ): Hotel
  }
`;

export default HotelSchema;
