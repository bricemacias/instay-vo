import { gql } from 'apollo-boost';

//
// Queries
//

export const GET_ALL_HOTEL_OWNERS = gql`
  query {
    getAllHotelOwner {
      id
      firstName
      lastName
      username
      email
      phone
      password
      joinDate
    }
  }
`;

export const GET_CURRENT_HOTEL_OWNER = gql`
  query {
    getCurrentHotelOwner {
      id
      username
      email
      joinDate
    }
  }
`;

export const GET_HOTEL_OWNER_BY_USERNAME = gql`
  query($username: String!) {
    getHotelOwnerByUsername(username: $username) {
      id
      username
      email
    }
  }
`;

//
// Mutations
//

export const SIGNUP_HOTEL_OWNER = gql`
  mutation(
    $firstName: String!
    $lastName: String!
    $username: String!
    $email: String!
    $phone: Int!
    $password: String!
  ) {
    signupHotelOwner(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      phone: $phone
      password: $password
    ) {
      token
    }
  }
`;

export const SIGNIN_HOTEL_OWNER = gql`
  mutation($username: String!, $password: String!) {
    signinHotelOwner(username: $username, password: $password) {
      token
    }
  }
`;
