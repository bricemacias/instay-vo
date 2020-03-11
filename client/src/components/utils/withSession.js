import React from 'react';

import { Query } from 'react-apollo';

import { GET_CURRENT_INFLUENCER } from '../../graphql/queries/influencer';

const withSession = Component => props => (
  <Query query={GET_CURRENT_INFLUENCER} fetchPolicy="no-cache">
    {({ data, loading, refetch }) => {
      if (loading) return null;
      console.log(data);
      return <Component {...props} data={data} refetch={refetch} />;
    }}
  </Query>
);

export default withSession;
