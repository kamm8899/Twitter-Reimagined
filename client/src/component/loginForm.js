import React, {useState} from 'react';
import { Grid, Button, TextField, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import FormControl from '@mui/material/FormControl';

const LoginForm = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [login] =useMutation(LOGIN_USER);
  
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