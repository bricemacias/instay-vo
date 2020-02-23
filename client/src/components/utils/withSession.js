import React from 'react';

import { Query } from 'react-apollo';

import { GET_CURRENT_INFLUENCER } from '../../graphql/queries/influencer';

const withSession = Component => props => (
  <Query query={GET_CURRENT_INFLUENCER}>
    {({ data, loading, refetch }) => {
      if (loading) return null;
      console.log(data);
      return <Component {...props} refetch={refetch} />;
    }}
  </Query>
);

export default withSession;
