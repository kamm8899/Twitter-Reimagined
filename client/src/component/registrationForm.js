import React from 'react';
import { Grid, Button, TextField, CardContent } from '@mui/material';
import Box from '@mui/material/Box';

const RegistrationForm = () => {
      
    return (
        <Box style={{ maxWidth: 650, margin: "0 auto", padding: "20px 5px" }}>
        <CardContent>
            <form>
                <Grid container spacing={1}>
                    <Grid xs={12} item>
                        <TextField
                            required
                            id="outlined-error-helper-text"
                            label="Name"
                            fullWidth
                            color="common"
                            focused
                        />
                    </Grid>
                    <Grid xs={12} item>
                        <TextField
                            required
                            type="email"
                            id="outlined-error-helper-text"
                            label="Email"
                            fullWidth
                            color="common"
                            focused
                        />
                    </Grid>
                    <Grid xs={12} item>
                        <TextField
                            required
                            type="password"
                            id="outlined-error-helper-text"
                            label="Password"
                            fullWidth
                            color="common"
                            focused
                        />
                    </Grid>
                    <Grid sx={{ mt: 0.25 }} xs={12} item>
                        <Button type="submit">
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