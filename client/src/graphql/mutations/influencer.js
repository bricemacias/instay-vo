import { gql } from 'apollo-boost';

export const SIGNUP_INFLUENCER = gql`
  mutation(
    $firstName: String!
    $lastName: String!
    $username: String!
    $instagram: String!
    $email: String!
    $password: String!
  ) {
    signupInfluencer(
      firstName: $firstName
      lastName: $lastName
      username: $username
      instagram: $instagram
      email: $email
      password: $password
    ) {
      token
    }
  }
`;

export const SIGNIN_INFLUENCER = gql`
  mutation($username: String!, $password: String!) {
    signinInfluencer(username: $username, password: $password) {
      token
    }
  }
`;
