import React from "react";
import {Typography} from '@mui/material';
import Jess from '../images/jess.png';
import Zack from '../images/zack.png';
import Chase from '../images/unclechase.png';
import Justin from '../images/justin.png';
import Mike from '../images/mike.png';
import Ron from '../images/ron.png';
function Footer() {
    return (
        <>
      <footer >
       <Typography color="error" sx={{fontSize:"25px"}}> 
       This app was made by:
       </Typography>
       <img src={Ron} style={{ width:"300px"}}/>

      </footer>
      </>
    )
  }
  
  export default Footer;