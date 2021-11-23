import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Nav from './component/navbar';
import Dashboard from './pages/dashboard';
import Home from './pages/homepage'
import Donation from './pages/donationpage';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Footer from '../src/component/footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {

  return (
    <ApolloProvider client={client}>
      <>
        <Router>
          <Box>
              <Nav />
                <Box className="main" bgcolor="primary.main">
                  <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/dashboard" component={Dashboard} />
                  </Switch>
                </Box>
                <Box>
                <Footer />
                </Box>
          </Box>
         
        </Router>
      </>
    </ApolloProvider>

  );
}

export default App;