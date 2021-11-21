import React, { useState } from 'react';
import { Grid, Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../utils/mutations";
import { ALL_POST } from "../utils/queries";



const AddPosts = () => {

    // const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [postText, setPostText] = useState('');


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPostText({ ...postText, [name]: value });

    };

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            await addPost({
                variables: { postText }
            });

        } catch (e) {
            console.error(e);
        }
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
            setPostText({
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
                    value={postText}
                    text="postTextData"
                    name="postTextData"
                />
                <Button type="submit" variant="outlined" color="secondary" sx={{ mb: 2 }}>Post</Button>
            </form>
        </Box>
    )
};

export default AddPosts;