import { gql } from 'apollo-server-express';

import ClientSchema from './Client';
import InfluencerSchema from './Influencer';
import TokenSchema from './Token';

const schema = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  type Subscription {
    _empty: String
  }

  ${ClientSchema}
  ${InfluencerSchema}
  ${TokenSchema}
`;

export default schema;
