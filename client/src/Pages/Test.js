import React from 'react';

import { Query } from 'react-apollo';
import { GET_ALL_RECIPES } from '../graphql/queries';

const Test = () => {
  return (
    <div>
      <h1>Test</h1>
      <Query query={GET_ALL_RECIPES}>
        {(data, loading, error) => {
          if (loading) return <div>Loading</div>;
          if (error) return <div>Error</div>;
          console.log(data);
        }}
      </Query>
    </div>
  );
};

export default Test;
