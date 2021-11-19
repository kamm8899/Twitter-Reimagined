import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Nav from './component/navbar';
import Home from './pages/homepage.js';

function App() {
  // const [pages] = useState([
  //   { name: 'About', component: <About /> },
  //   { name: 'Projects', component: <Projects /> },
  //   { name: 'Contact', component: <Contact /> },
  // ]);

  // const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
   
    <>
     <Box className="main" bgcolor="primary.main">
      <Nav></Nav>
    </Box>
    <Box>
    <Home></Home>
    </Box>

    </>
  );
}

export default App;