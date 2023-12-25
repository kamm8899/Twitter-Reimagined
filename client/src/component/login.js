import * as React from 'react';
// material ui stuff
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// components
import LoginForm from './loginForm';
import RegistrationForm from './registrationForm';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

/**
* @description This function is a React component that renders a tab panel based on
* the provided `value` and `index` props.
* 
* @param { object } props - The `props` object passes attributes and properties to
* the TabPanel element.
* 
* @returns {  } The `TabPanel` function returns a `div` element with a `role="tabpanel"`,
* hidden if the value does not match the `index`, and an `id` and `aria-labelledby`
* attributes set to unique values based on the `index`.
*/
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

/**
* @description This function provides accessible name and ARIA properties for a tab
* component.
* 
* @param {  } index - The `index` parameter passed to the `a11yProps` function
* generates unique identifier strings used for accessibility attributes such as 'aria-controls'.
* 
* @returns { object } The function `a11yProps` takes an index `index` as an argument
* and returns an object with two properties: `id` and `aria-controls`. The `id`
* property is set to a unique ID that includes the value of `index`, while the
* `aria-controls` property is set to an ID that includes the value of `index` plus
* "simple-tabpanel".
*/
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


/**
* @description This function renders a login dialog with two tabs: "Login" and "Sign
* Up". When the user clicks on the login button., the dialog opens and the user can
* choose which tab to select.
* 
* @returns {  } The output returned by the `Login` function is a rendered `Dialog`
* component with a `Tab` component inside it. The `Tab` component has two tabs:
* "Login" and "Sign Up", and each tab is associated with a respective `TabPanel`
* component that contains either the `LoginForm` or the `RegistrationForm`. When the
* user clicks on the "Login" tab label or presses enter while the focus is on the
* "Login" tab label , the `value` state variable gets updated to 0 and when they
* click on the "Sign Up" tab label or press enter while the focus is on the "Sign
* Up" tab label , the `value` state variable gets updated to 1.
*/
export default function Login() {
  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState(0);

/**
* @description The function `handleChange` is a callback function that updates the
* value of a state variable (`value`) when the user inputs a new value using an input
* field or other form element. It takes two arguments: `event` (which is not used)
* and `newValue`.
* 
* @param {  } event - The `event` input parameter is not usedin the function and is
* considered "optional" so it can be skipped or ignored.
* 
* @param {  } newValue - In the provided function `handleChange = (event[, newValue])
* => {}`, the `newValue` parameter represents the new value that the input field
* should have after the user's change has been applied.
* 
* @returns {  } The output returned by the function `handleChange` is undefined
* because the function does not return anything.
*/
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
/**
* @description This function sets the `open` state to `true` when called.
* 
* @returns {  } This function does not return anything or any value; therefore it
* returns undefined as it's an arrow function without returning a value and explicitly
* doing so through "return" keyword or expression.
*/
  const handleClickOpen = () => {
    setOpen(true);
  };

/**
* @description The `handleClose` function sets the value of `open` to `false`.
* 
* @returns { any } The function `handleClose` is undefined because it does not return
* anything (the `return` statement is absent).
*/
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button onClick={handleClickOpen} color="secondary" sx={{ pr: 4, fontSize:"25px" }}>
        Login
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box>
          <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="basic tabs example"
          textColor="inherit"
          indicatorColor="secondary"
          >
            <Tab label="Login" {...a11yProps(0)} />
            <Tab label="Sign Up" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <DialogContent>
          <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ letterSpacing: 15 }}>&#9733; &#9733; &#9733;	&#9733;	&#9733;	&#9733; &#9733; &#9733; &#9733; &#9733;</Typography>
          <Typography sx={{ letterSpacing: 15 }}>&#9733; &#9733; &#9733;	&#9733;	&#9733;	&#9733; &#9733; &#9733; &#9733; &#9733;</Typography>
          <Typography sx={{ letterSpacing: 15 }}>&#9733; &#9733; &#9733;	&#9733;	&#9733;	&#9733; &#9733; &#9733; &#9733; &#9733;</Typography>
          <Typography sx={{ letterSpacing: 15 }}>&#9733; &#9733; &#9733;	&#9733;	&#9733;	&#9733; &#9733; &#9733; &#9733; &#9733;</Typography>
          <Typography sx={{ letterSpacing: 15 }}>&#9733; &#9733; &#9733;	&#9733;	&#9733;	&#9733; &#9733; &#9733; &#9733; &#9733;</Typography>
          </Box>
          <TabPanel value={value} index={0}>
            <LoginForm />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <RegistrationForm />
          </TabPanel>       
        </DialogContent>
        
      </Dialog>
    </Box>
  );
}
