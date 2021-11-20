import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddCommentIcon from '@mui/icons-material/AddComment';
import ReplyForm from './reply';


const Post = ({ post }) => {

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
                <ReplyForm />
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
