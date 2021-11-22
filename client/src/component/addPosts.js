import React, { useState } from 'react';
import { Grid, Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useMutation, useQuery } from "@apollo/client";
import { ADD_POST } from "../utils/mutations";
import { ALL_POST, GET_ME } from "../utils/queries";
import { useParams } from 'react-router-dom';



const AddPosts = () => {

    // const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [userFormData, setUserFormData] = useState('');
    const { data: userData } = useQuery(GET_ME);
    

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });

    };

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            await addPost({
                variables: { 
                    ...userFormData,
                    username : userData.me.username
                 }
            });

        } catch (e) {
            console.error(e);
        }
        // console.log(userData.me.username)
        // console.log(userFormData)
    };

    const [addPost, { error }] = useMutation(ADD_POST, {
        update(cache, { data: { addPost } }) {
            try {

                const { posts } = cache.readQuery({ query: ALL_POST });
                cache.writeQuery({
                    query: ALL_POST,
                    data: { posts: [addPost, ...posts] }
                });
            } catch (e) {
                console.error(e)
            }
            setUserFormData({
                postText: ''
            });
        }
    });

    return (
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
            <form noValidate onSubmit={handleFormSubmit}>
                <TextField
                    fullWidth
                    id="standard-textarea"
                    label="Say Something"
                    multiline
                    maxRows={4}
                    focused
                    color="secondary"
                    value={userFormData.postText}
                    text="postText"
                    name="postText"
                    onChange={handleInputChange}
                />
                <Button type="submit" variant="outlined" color="secondary" sx={{ mb: 2 }}>Post</Button>
            </form>
        </Box>
    )
};

export default AddPosts;