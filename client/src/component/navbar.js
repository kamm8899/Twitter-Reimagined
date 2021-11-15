import React from 'react';
//material ui imports
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Menu from '@mui/icons-material/Menu';
import onlybans from '../images/onlybans.png'
// import  MenuItem  from '@mui/material/MenuItem';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

//components
import Login from './login';

const Nav = (props) => {
    const {
        pages = [],
        setCurrentPage
      } = props

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
            <AppBar style={{backgroundColor:"black"}} position="static">
                <Toolbar >
                <Grid container>
                    <img src={onlybans} style={{ width:"200px"}}/>
                </Grid>
                <Login />
                <Button>Dashboard</Button>
                <Button>Login</Button>
                <Button>Donate</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}


export default Nav;