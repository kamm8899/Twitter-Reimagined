import React from 'react';
//material ui imports
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import onlybans from '../images/onlybans.png'
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';

//components
import Login from './login';
import Auth from '../utils/auth';

const Nav = (props) => {
      const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
   
    return (
        <>
            <AppBar position="static" sx={{fontFamily: "gotham"}}>
                <Toolbar sx={{fontFamily: "gotham"}}>
                <Grid container>
                  <Button href="/">
                  <img src={onlybans} style={{ width:"300px"}}/>
                  </Button>
                </Grid>
                {Auth.loggedIn() ? (
                <>
                  <Button color="secondary" onClick={Auth.logout} sx={{ pr: 4, fontSize:"25px" }}>Logout</Button>
                  <Button color="secondary" sx={{pr: 4,fontSize:"25px" }} href="/dashboard">Dashboard</Button>
                  <Button color="secondary" sx={{pr: 4,fontSize:"25px" }}>Donate</Button>
                </>
              ) : (
                  <Login />
              )}
                </Toolbar>
            </AppBar>
        </>
    )
}
// color="secondary" sx={{ pr: 4, fontSize:"25px" }}

export default Nav;