import { gql } from 'apollo-boost';

//
// Queries
//

export const GET_CURRENT_INFLUENCER_OR_HOTEL_OWNER = gql`
  query {
    getCurrentInfluencer {
      id
      username
      email
      joinDate
    }
    getCurrentHotelOwner {
      id
      username
      email
      joinDate
    }
  }
`;
