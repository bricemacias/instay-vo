import React from 'react';
import { withRouter } from 'react-router-dom';

import { withApollo } from 'react-apollo';

const SignOut = ({ client, history }) => {
  const handleSignOut = async () => {
    localStorage.removeItem('token');
    client.resetStore();
    history.push('/');
  };

  return (
    <Button text onClick={handleSignOut}>
      Sign out
    </Button>
  );
};

export default withRouter(withApollo(Signout));
