import React, {useState} from 'react';
import { Grid, Button, TextField, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import FormControl from '@mui/material/FormControl';

/**
* @description This function defines a React component named `LoginForm` that displays
* a form for logging into an application using the `Auth` object. It uses the
* `useMutation` hook to call the `LOGIN_USER` mutation from Apollo Client when the
* form is submitted.
* 
* @returns { Component } The `LoginForm` function returns a React component that
* renders a login form with two text fields and a submit button. The form is designed
* to validate user input using React Bootstrap's built-in validation capabilities.
* When the form is submitted successfully (i.e., when all fields are valid), the
* `login` mutation is called with the form data as arguments. The mutation attempts
* to log the user into the server with their credentials.
*/
const LoginForm = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [login] =useMutation(LOGIN_USER);
  
/**
* @description This function is a handleChange event handler for an input form field.
* 
* @param { object } event - The `event` input parameter is an object that contains
* information about the form input element that triggered the function call.
* 
* @returns { any } This function takes an event object as its parameter and returns
* nothing (undefined).
*/
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUserFormData({ ...userFormData, [name]: value });

    };
/**
* @description This function handles the form submission event and performs the
* following actions:
* 
* 1/ Prevents the default form submission behavior using `event.preventDefault()`.
* 2/ Checks the validity of the form using `form.checkValidity()` and prevents further
* submission if invalid.
* 3/ Submits the form data to the login API using `login({ variables: {...userFormData}
* })` and waits for the response.
* 4/ Handles any errors that may occur during the submission process by logging them
* to the console and displaying an alert message.
* 5/ Resets the form data after successful submission.
* 
* @param { object } event - In this function `handleFormSubmit`, the `event` input
* parameter is used to prevent the default form submission behavior and to stop the
* propagation of the event.
* 
* @returns { object } The output returned by this function is a `Promise` that
* resolves to an object containing the logged-in user's token.
* 
* Here's a concise description of what happens within the function:
* 
* 1/ It preventes default form submission behavior and checks form validity using `checkValidity()`.
* 2/ If the form is invalid (`form.checkValidity() === false`), it prevents the event
* from propagating and sets up an alert to be shown.
* 3/ Otherwise (if the form is valid), it makes a login API call using `login({
* variables: {...userFormData} })` asynchronously.
* 4/ If the API call succeeds (i.e., the user's credentials are correct and the token
* is obtained), it logs the token and calls `Auth.login()` to log the user into the
* system with the obtained token.
* 5/ Finally (`catch` block), if an error occurs during the API call or logging into
* the system using `Auth.login()`, it displays an alert with an error message.
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
///rwar
