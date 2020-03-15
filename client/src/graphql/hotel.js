import { gql } from 'apollo-boost';

//
// Queries
//

export const GET_ALL_HOTELS = gql`
  query {
    getAllHotels {
      id
      name
      owner
      location
      website
    }
  }
`;

//
// Mutations
//

export const ADD_HOTEL = gql`
  mutation($name: String!, $owner: ID!, $location: String!, $website: String!) {
    addHotel(
      name: $name
      owner: $owner
      location: $location
      website: $website
    ) {
      id
      name
      owner
      location
      website
    }
  }
`;
