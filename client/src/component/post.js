import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddCommentIcon from '@mui/icons-material/AddComment';
import ReplyForm from './reply';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import { ALL_POST, ALL_USERS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { useEffect } from 'react';
import Collapse from '@mui/material/Collapse';
import Auth from '../utils/auth';
import AddPosts from './addPosts';

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
    // const [expanded, setExpanded] = React.useState(false);
    const [expanded, setExpanded] = useState(false);
    const { loading, data } = useQuery(ALL_POST);
    const postData = data?.allPost || [];
    // if (!postData.length) {
    //     return <h3>No Post Yet</h3>;
    // }
    // console.log(data?.allPost || [])
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
                            postData.map(postData => (
                                <Box key={postData._id} >
                                    <Card sx={{ background: '#414a4c', mb: 2 }}>
                                        {/* placeholder to be replaced with username prop above*/}
                                        <CardContent>
                                            <Typography variant='h5' gutterbottom>
                                                {postData.username}
                                            </Typography>
                                        </CardContent>
                                        <CardContent>
                                            <Typography variant="h3">
                                                {postData.postText}
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            <ReplyForm />
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
                                                    SAMPLE REPLY
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