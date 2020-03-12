import React from 'react';

import { Query } from 'react-apollo';

import { GET_CURRENT_INFLUENCER_OR_HOTEL_OWNER } from '../../graphql/combinations';

const withSession = Component => props => (
  <Query query={GET_CURRENT_INFLUENCER_OR_HOTEL_OWNER} fetchPolicy="no-cache">
    {({ data, loading, refetch }) => {
      if (loading) return null;
      console.log(data);
      return <Component {...props} session={data} refetch={refetch} />;
    }}
  </Query>
);

export default withSession;
