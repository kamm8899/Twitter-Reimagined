import React from 'react';
import { Grid, Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';

import Post from '../component/post';
import AddPosts from '../component/addPosts';
import { useMutation } from "@apollo/client";





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
            <AddPosts></AddPosts>
            <Post></Post>

        </Box>
    );
}


export default Home;