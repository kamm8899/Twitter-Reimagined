import React, { useState } from 'react';
import { Box, Card , Typography, CardContent, CardActions, IconButton  } from '@mui/material';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import { GET_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Collapse from '@mui/material/Collapse';
import Auth from '../utils/auth';
import { useMutation } from "@apollo/client";
import { REMOVE_POST } from "../utils/mutations";

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
    console.log("data fetch " +JSON.stringify(data, null, 2));
    const meData = [...data?.me.posts || []];
    const name = data?.me.username || "";
 
    console.log("medata" + JSON.stringify(meData, null, 2))

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const [removePost, { error }] = useMutation(REMOVE_POST) 
    const handleRemovePost = async (event, id) => {
        try {
            await removePost({
                variables: { 
                    _id: id
                 }
            });
            window.location.reload(false)

        } catch (e) {
            console.error(e);
        }

    }

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
                        
                        {meData &&
                            meData.reverse().map(meDataItem => (
                                <Box key={meDataItem._id} >
                                    <Card sx={{ background: '#414a4c', mb: 2 }}>
                                        {/* placeholder to be replaced with username prop above*/}
                                        <CardContent>
                                            <Typography variant='h5' gutterbottom>
                                                {name}
                                            </Typography>
                                        </CardContent>
                                        <CardContent>
                                            <Typography variant="h3">
                                                {meDataItem.postText}
                                            </Typography>

                                            <Button type="button" onClick={(event) => handleRemovePost(event, meDataItem._id) }
                                            variant="outlined" color="secondary" sx={{ mb: 2 }} >Delete</Button>
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