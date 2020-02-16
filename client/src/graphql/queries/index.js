import { gql } from 'apollo-boost';

export const GET_ALL_RECIPES = gql`
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
