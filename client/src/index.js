import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import 'normalize.css';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';

import RootRoutes from './Routes/RootRoutes';

import withSession from './components/utils/withSession';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';

// import { InMemoryCache } from 'apollo-cache-inmemory';

// import { createHttpLink } from 'apollo-link-http';

import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from 'apollo-cache-inmemory';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: [
        {
          kind: 'UNION',
          name: 'AdsReturn',
          possibleTypes: [
            {
              name: 'Ads'
            },
            {
              name: 'Error'
            }
          ]
        }
      ]
    }
  }
});

const client = new ApolloClient({
  // cache: new InMemoryCache(),
  cache: new InMemoryCache({ fragmentMatcher }),

  // link: createHttpLink({ uri: 'http://localhost:4444/graphql' }),
  // //uri: 'https://instay-v0.herokuapp.com/graphql',
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

const RouteWithSession = withSession(RootRoutes);

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <ThemeProvider theme={theme}>
        <RouteWithSession />
      </ThemeProvider>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
