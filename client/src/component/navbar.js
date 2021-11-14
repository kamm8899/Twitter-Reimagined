import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/icons-material/Menu';
import onlybans from '../images/onlybans.png'
import  MenuItem  from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Login from './login';
import Modal from '@mui/material/Modal';


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
      
      
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
   
    return (
        <>
            <AppBar style={{backgroundColor:"black"}} position="static">
                <Toolbar >
                <Grid container>
                    <img src={onlybans} style={{ width:"200px"}}/>
                </Grid>
                <Button onClick={handleOpen}>Login</Button>
                <Button>Dashboard</Button>
                <Button>Login</Button>
                <Button>Donate</Button>
                </Toolbar>
            </AppBar>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
        </>
    )
}


export default Nav;