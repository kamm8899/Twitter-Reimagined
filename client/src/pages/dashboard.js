import React, { useState } from 'react';
import { Box, Card , Typography, CardContent, CardActions, IconButton  } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import { GET_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Collapse from '@mui/material/Collapse';
import Auth from '../utils/auth';

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


//make this to show all user post
const Dashboard = () => {
    
    const [expanded, setExpanded] = useState(false);
    const { loading, data } = useQuery(GET_ME);
    const meData = data?.me || {};
 
    console.log(meData)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    if (loading) {
        return <Card>LOADING...</Card>;

    }
    return (
        <Box color="primary"
            sx={{
                background: '#000000',
            py: 5,
            px: 2,
            maxWidth: '50%',
            margin: 'auto',
        }}>
            {Auth.loggedIn() ? (
                <>
                    <Box>
                        
                        {meData && meData?.posts && 
                            meData.posts.map(meDataItem => (
                                <Box key={meDataItem._id} >
                                    <Card sx={{ background: '#414a4c', mb: 2 }}>
                                        {/* placeholder to be replaced with username prop above*/}
                                        <CardContent>
                                            <Typography variant='h5' gutterbottom>
                                                {meData.username}
                                            </Typography>
                                        </CardContent>
                                        <CardContent>
                                            <Typography variant="h3">
                                                {meDataItem.postText}
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
                                    YOU MUST BE LOGGED IN TO SEE YOUR POSTS
                                </Typography>
                            </CardContent>

                        </Card>
                    </Box>
                </Box>
            )}
        </Box>


    );
};

export default Dashboard;