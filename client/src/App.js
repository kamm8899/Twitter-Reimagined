import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Nav from './component/navbar';
import Home from './pages/homepage'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import Footer from '../src/component/footer';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, {headers})=>{
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization:token ? `Bearer ${token}`:"",
    }
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  // const [pages] = useState([
  //   { name: 'About', component: <About /> },
  //   { name: 'Projects', component: <Projects /> },
  //   { name: 'Contact', component: <Contact /> },
  // ]);

  // const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <ApolloProvider client={client}>
    <>
    <Box>
      <Nav />
    </Box>
    <Box className="main" bgcolor="primary.main">
      <Home />
      <Footer/>
    </Box>
    </>
    </ApolloProvider>

  );
}

export default App;