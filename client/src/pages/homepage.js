import React from 'react';
import { Grid, Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Post from '../component/post';


const Home = () => {

    return (
        <Box color="primary"
         sx={{ 
            background: '#000000',
            py: 5,
            px: 2,
            maxWidth: '50%',
            margin: 'auto',
        }}>
            <Box
                container
                spacing={3}
                component="form"
                sx={{
                '& .MuiTextField-root': { m: 1, maxWidth: '100%' },
                justifyContent: "flex-end"
                }}
                noValidate
                autoComplete="off"
            >
                    <TextField
                    fullWidth
                    id="standard-textarea"
                    label="Say Something"
                    multiline
                    maxRows={4}
                    focused
                    color="secondary"
                    />
                    <Button variant="outlined" color="secondary" sx={{mb:2}}>Post</Button>
                <Post />
            </Box>
            {/* <Post /> */}
        </Box>
    );
}


export default Home;