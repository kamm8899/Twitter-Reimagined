import * as React from 'react';
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
import {ALL_POST} from "../utils/queries";
import { useQuery} from "@apollo/client";
import {useEffect} from 'react';
import Collapse from '@mui/material/Collapse';


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


const Post = ({ post }) => {
    const [expanded, setExpanded] = React.useState(false);
    const { loading, postData} = useQuery(ALL_POST);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
     useEffect(()=> {
        if(postData){
            console.log(postData);
        }
     },[loading, postData]);
    return (
        <Box>
            <Card sx={{ background: '#414a4c', mb: 2 }}>
                {/* uncomment cardheader and try that format
                to pass username prop into the header, 
                if that doesnt work try passing it into the card
                content placeholder below instead*/}
                {/* <CardHeader
                    title={username.name}
                /> */}
                {/* placeholder to be replaced with username prop above*/}
                <CardContent>
                    <Typography variant='h5' gutterbottom>
                        Username
                    </Typography>
                </CardContent>
                {/* end placeholder username */}
                <CardContent>
                    <Typography variant="body2">
                        {/* to be replaced with post body prop */}
                        sample post body
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
                        <Typography variant="body2">
                            SAMPLE REPLY
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>

            {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
            {/* THESE ARE JUST HARDCODED SAMPLES TO BE DELETED */}
            {/* VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV */}
            <Card sx={{ background: '#414a4c', mb: 2 }}>
                <CardContent>
                    <Typography variant='h5' gutterbottom>
                        Username
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="body2">
                        sample post body
                    </Typography>
                </CardContent>
                <IconButton aria-label="add a comment">
                    <AddCommentIcon>
                        <ReplyForm />
                    </AddCommentIcon>
                </IconButton>
            </Card>

            <Card sx={{ background: '#414a4c', mb: 2 }}>
                <CardContent>
                    <Typography variant='h5' gutterbottom>
                        Username
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="body2">
                        sample post body
                    </Typography>
                </CardContent>
                <IconButton aria-label="add a comment">
                    <AddCommentIcon />
                </IconButton>
            </Card>

        </Box>
    )
}

export default Post;
