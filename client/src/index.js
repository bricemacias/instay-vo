import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Routes from './Routes/Routes';

import withSession from './components/utils/withSession';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  //uri: 'https://instay-v0.herokuapp.com/graphql'
  uri: 'http://localhost:4444/graphql',
  fetchOptions: {
    credentials: 'include'
  },
  request: operation => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token
      }
    });
  },

  onError: ({ networkError }) => {
    if (networkError) {
      console.log('Network Error', networkError);

      // if(networkError.statusCode === 401) {
      //   ...
      // }
    }
  }
});

const RouteWithSession = withSession(Routes);

ReactDOM.render(
  <ApolloProvider client={client}>
    <RouteWithSession />
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
