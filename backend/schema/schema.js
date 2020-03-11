import { gql } from 'apollo-server-express';

import HotelOwnerSchema from './HotelOwner';
import HotelSchema from './Hotel';
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
  ${HotelOwnerSchema}
  ${HotelSchema}
  ${InfluencerSchema}
  ${TokenSchema}
`;

export default schema;
