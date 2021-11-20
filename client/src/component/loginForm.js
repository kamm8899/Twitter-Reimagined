import React from 'react';
import { Grid, Button, TextField, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import Auth from '../utils/auth'

const LoginForm = () => {

    return (
        <Box style={{ maxWidth: 650, margin: "0 auto", padding: "20px 5px" }}>
            <CardContent sx={{fontFamily: "gotham"}}>
                <form>
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
                                style={{marginBottom:"10px"}}
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
                                style={{marginBottom:"10px"}}

                            />
                        </Grid>
                        <Grid sx={{ mt: 0.25 }} xs={12} item >
                            <Button type="submit"  color="secondary" variant="outlined" fullWidth style={{ border: '2px solid', marginBottom:"15px", fontSize:"22px"}}>
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