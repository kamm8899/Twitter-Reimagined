import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@'
import CardContent from '@mui/material';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import AddCommentIcon from '@mui/icons-material/AddComment';

const ReplyForm = () => {
//     const Transition = React.forwardRef(function Transition(props, ref) {
//         return <Slide direction="up" ref={ref} {...props} />;
//       });

//       const [open, setOpen] = React.useState(false);

//       //added State of comments
//       const [comment, setComment] = React.useState("");
    
//       const handleClickOpen = () => {
//         setOpen(true);
//       };
    
//       //added for CommentBody
//       function handleCommentBody(event){
//         const body = event.target.value;
//         setComment(body);
//       }

//       function handleComments(){
//         console.log(comment);
//       }


//     return (

//         <Box>
//         {/* this button is a placeholder until i can figure out why
//         the icon button is throwing errors */}
//         <Button onClick={handleClickOpen}>
//             Reply
//         </Button>
//         {/* <IconButton onClick={handleClickOpen} color='inherit'>
//             <AddCommentIcon />
//         </IconButton> */}
//         <Dialog
//           open={open}
//           TransitionComponent={Transition}
//           keepMounted
//           // onClose={handleClose}
//           aria-describedby="alert-dialog-slide-description"
//         >
//             {/* modal contents */}
//             <DialogTitle>Reply</DialogTitle>
//             <DialogContent>
//             <Box style={{ maxWidth: 650, margin: "0 auto", padding: "20px 5px" }}>
//             <CardContent sx={{fontFamily: "gotham"}}>
                
//                 <Box
//                     container
//                     spacing={3}
//                     component="form"
//                     sx={{
//                     '& .MuiTextField-root': { m: 1, maxWidth: '100%' },
//                     }}
//                     noValidate
//                     autoComplete="off"
//                 >
//                     <TextField
//                     fullWidth
//                     error
//                     id="standard-textarea"
//                     label="Reply"
//                     multiline
//                     maxRows={4}
//                     value = {comment
//                     onChange ={(event)=>{
//                       const body = event.target.value;
//                         console.log(body);
//                         }}
//                     />
//                         <Grid sx={{ mt: 0.25 }} xs={12} item >
//                             <Button  onClick = {handleComments} type="submit" color="error" variant="outlined" fullWidth style={{ border: '2px solid', marginBottom:"15px", fontSize:"22px"}}>
//                                 Post
//                             </Button>
//                         </Grid>
//                 </Box>
                
//             </CardContent>
//         </Box>
//             </DialogContent>
//         </Dialog>
//       </Box>
//     );
}
