import React from 'react';
//material ui imports
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import onlybans from '../images/onlybans.png'
import Grid from '@mui/material/Grid';

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
                    <img src={onlybans} style={{ width:"200px"}}/>
                </Grid>
                {Auth.loggedIn() ? (
                <>
                 
                  <Button color="secondary" onClick={Auth.logout} sx={{ pr: 2 }}>Logout</Button>
                </>
              ) : (
                <Login sx={{ pr: 2 }} />
              )}
                
                <Button color="secondary" sx={{ pr: 2 }}>Dashboard</Button>
                <Button color="secondary">Donate</Button>

                </Toolbar>
            </AppBar>
        </>
    )
}


export default Nav;