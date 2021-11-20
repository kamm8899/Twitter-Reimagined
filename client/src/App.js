import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Nav from './component/navbar';
import Home from './pages/homepage'

function App() {
  // const [pages] = useState([
  //   { name: 'About', component: <About /> },
  //   { name: 'Projects', component: <Projects /> },
  //   { name: 'Contact', component: <Contact /> },
  // ]);

  // const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <>
    <Box>
      <Nav />
    </Box>
    <Box className="main" bgcolor="primary.main">
      <Home />
    </Box>
    </>
  );
}

export default App;