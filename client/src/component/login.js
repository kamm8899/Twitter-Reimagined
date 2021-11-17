import * as React from 'react';
// material ui stuff
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import LoginForm from './loginForm';
import RegistrationForm from './registrationForm';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Login({forms}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} color="secondary">
        Login
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
            Login
            &#9733;	&#9733;	&#9733;	&#9733;	
            &#9733;	&#9733;	&#9733; &#9733;
        </DialogTitle>
        <DialogContent>
            <LoginForm />
            {/* <RegistrationForm /> */}
            
        </DialogContent>
        
      </Dialog>
    </div>
  );
}