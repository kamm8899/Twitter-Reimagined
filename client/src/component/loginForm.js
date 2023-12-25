import React, {useState} from 'react';
import { Grid, Button, TextField, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import FormControl from '@mui/material/FormControl';

/**
* @description This function creates a login form using React Bootstrap components.
* It manages the user input state and validates the form inputs. If the form is
* invalid or there's an error during the API call to login the user will receive a
* visual alert informing them of the issue.  The LoginForm component consists of the
* following main parts:
*   1/ State initialization: initializing state variables userFormData with default
* empty values and setShowAlert to false
*   2/ Form validation and submission handling  using useMutation(LOGIN_USER) which
* is an API call to login the user if all fields are valid and email/password
* credentials exist. The API response token can be used by Login service to authenticate
* the user. The show alert and reset the user form state with empt values after
* successful loginn 3 Enterprise Validation for form submission event prevention
* stopping Propagation of unwanted events from occuring
*     - Check if form Valid (CheckValidity() ) If the form does not have all the
* valid fields pre filled (According to React bootstrap's requirement of <form>)
* prevent the default login event submission.
* 
* @returns {  } The `LoginForm` function returns a React component that renders a
* login form with two text fields for email and password. The form has a submit
* button that triggers a async login mutation using `useMutation`. If the login is
* successful or errors occur during login verification will trigger alert to display
* on UI indicating an issue occurred logging
* 
* In concise manner: LoginForm renders login form for users , handleformsubmit
* function is invoked by form submit. When submitbuttonisclicked it firesasync
* mutation via useMutation to authenticate user & verify details against server.
*/
const LoginForm = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [login] =useMutation(LOGIN_USER);
  
/**
* @description This function updates the `userFormData` object with the current
* values of the form inputs.
* 
* @param {  } event - The `event` input parameter is an object that contains information
* about the change that triggered the function call.
* 
* @returns {  } The function `handleInputChange` takes an event as an argument and
* returns nothing (i.e., `undefined`).
*/
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUserFormData({ ...userFormData, [name]: value });

    };
/**
* @description This function handles the form submission event for a login form. It
* prevents the default form submission behavior and checks if the form is valid using
* `form.checkValidity()`. If the form is invalid (i.e., the validation fails), it
* logs an error message and sets the show alert flag to true. If the form is valid
* (i.e., the validation passes), it calls the login API with the form data and then
* logs the user on successfully.
* 
* @param {  } event - In the function `handleFormSubmit`, the `event` parameter is
* used to prevent the default form submission behavior and to stop the event from
* propagating further.
* 
* @returns { Promise } The `handleFormSubmit` function returns nothing (void) as it
* is an asynchronous function and it does not return a value after the `try-catch`
* block.
* 
* In simple words: the function prevents the default form submission behavior by
* calling `event.preventDefault()`, then it checks if the form is valid and if it's
* not valid it will show an error alert.
*/
    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        try {
          const data= await login({
            variables: {...userFormData}
          });
          console.log(data);
          Auth.login(data.data.login.token);
        } catch (err) {
          console.error(err);
          setShowAlert(true);
        }
        setUserFormData({
            username: '',
            email: '',
            password: '',
          });
        };
    return (
        <Box style={{ maxWidth: 650, margin: "0 auto", padding: "20px 5px" }}>
            <CardContent sx={{fontFamily: "gotham"}}>
                <form noValidate validated={validated} onSubmit={handleFormSubmit}>
                    <Grid container spacing={1}>
                        <Grid xs={12} item>
                            <TextField
                                required
                                error
                                id="outlined-error-helper-text"
                                label="Email Address"
                                fullWidth
                                color="error"
                                focused
                                style={{marginBottom:"10px"}}
                                onChange={handleInputChange}
                                value={userFormData.email}
                                text="email"
                                name="email"
                            />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField
                                required
                                error
                                type="password"
                                id="outlined-error-helper-text"
                                label="Password"
                                fullWidth
                                color="error"
                                focused
                                style={{marginBottom:"10px"}}
                                onChange={handleInputChange}
                                value={userFormData.password}
                                text="password"
                                name="password"
                                />
                        </Grid>
                        <Grid sx={{ mt: 0.25 }} xs={12} item >
                            <Button type="submit"  color="secondary" variant="outlined" fullWidth style={{ border: '2px solid', marginBottom:"15px", fontSize:"22px"}} disabled={!(userFormData.email && userFormData.password)}>
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Box>
    )
}

export default LoginForm;
