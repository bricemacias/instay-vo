import { gql } from 'apollo-boost';

export const GET_ALL_INFLUENCERS = gql`
  query {
    getAllInfluencers {
      firstName
      firstName
      lastName
      username
      instagram
      password
      email
      joinDate
    }
  }
`;

export const GET_CURRENT_INFLUENCER = gql`
  query {
    getCurrentInfluencer {
      username
      joinDate
      email
    }
  }
`;
