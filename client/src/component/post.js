import React, { useState } from 'react';
import TextField from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddCommentIcon from '@mui/icons-material/AddComment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import { ALL_POST, ALL_USERS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { useEffect } from 'react';
import Collapse from '@mui/material/Collapse';
import Auth from '../utils/auth';
import AddPosts from './addPosts';
import {useMutation} from '@apollo/client';
import {ADD_COMMENT} from '../utils/mutations'
// import ReplyForm from '../component/reply';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const Post = () => {
    const [expanded, setExpanded] = useState(false);
    const { loading, data } = useQuery(ALL_POST);
    const postData = [...data?.allPost || []];
    
    console.log(postData)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    if (loading) {
        return <Card>LOADING...</Card>;

    }
    return (
        <Box>
            {Auth.loggedIn() ? (
                <>
                    <AddPosts></AddPosts>
                    <Box>
                        {postData &&
                            postData.reverse().map(postDataItem => (
                                <Box key={postDataItem._id} >
                                    <Card sx={{ background: '#414a4c', mb: 2 }}>
                                        {/* placeholder to be replaced with username prop above*/}
                                        <CardContent>
                                            <Typography variant='h5' gutterbottom>
                                                {postDataItem.username}
                                                {postDataItem.createdAt}
                                            </Typography>
                                        </CardContent>
                                        <CardContent>
                                            <Typography variant="h3">
                                                {postDataItem.postText}
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            {/* <ReplyForm /> */}
                                            <ExpandMore
                                                expand={expanded}
                                                onClick={handleExpandClick}
                                                aria-expanded={expanded}
                                                aria-label="Replies"
                                            >
                                                <ExpandMoreIcon />
                                            </ExpandMore>
                                        </CardActions>
                                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                                            <CardContent>
                                                <Typography>
                                                   Sample Reply
                                                </Typography>
                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                </Box>
                            ))}
                    </Box>
                </>
            ) : (
                <Box alignItems="center">
                    <Box>
                        <Card sx={{ background: 'black', mb: 2 }}>
                            <CardContent>
                                <Typography variant='h1' gutterbottom color="secondary">
                                    YOU MUST BE LOGGED IN TO SEE POSTS
                                </Typography>
                            </CardContent>

                        </Card>
                    </Box>
                </Box>
            )}
        </Box>


    );
};

export default Post;