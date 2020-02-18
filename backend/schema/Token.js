import { gql } from 'apollo-server-express';

const TokenSchema = gql`
  type Token {
    token: String!
  }
`;

export default TokenSchema;
