import React from 'react';

import { Query } from 'react-apollo';

import { GET_CURRENT_HOTEL_OWNER } from '../../graphql/hotelOwner';

const withHotelOwner = Component => props => (
  <Query query={GET_CURRENT_HOTEL_OWNER} fetchPolicy="no-cache">
    {({ data, loading }) => {
      if (loading) return null;
      console.log(data);
      return <Component {...props} hotelowner={data} />;
    }}
  </Query>
);

export default withHotelOwner;
