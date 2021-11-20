import React, { useState } from 'react';
import { Grid, Button, TextField, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Alert } from '@mui/material';

const RegistrationForm = () => {
    // set initial form state
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);

    const [addUser, { error }] = useMutation(ADD_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await addUser({
                variables: { ...userFormData }
            });

            Auth.login(data.addUser.token);
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
            <CardContent>
                <form noValidate validated={validated} onSubmit={handleFormSubmit}>
                    <Grid container spacing={1}>
                        <Grid xs={12} item>
                            <TextField
                                required
                                error
                                id="outlined-error-helper-text"
                                label="Username"
                                fullWidth
                                color="common"
                                focused
                                onChange={handleInputChange}
                                value={userFormData.username}
                                text="username"
                                name="username"
                            />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField
                                required
                                error
                                type="email"
                                id="outlined-error-helper-text"
                                label="Email"
                                fullWidth
                                color="common"
                                focused
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
                                color="common"
                                focused
                                onChange={handleInputChange}
                                value={userFormData.password}
                                text="password"
                                name="password"
                            />
                        </Grid>
                        <Grid sx={{ mt: 0.25 }} xs={12} item>
                            <Button type="submit" color="secondary" variant="outlined" fullWidth style={{ border: '2px solid', marginBottom: "15px", fontSize: "22px" }} disabled={!(userFormData.username && userFormData.email && userFormData.password)}>
                                Sign Up
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Box>
    )
}

export default RegistrationForm;