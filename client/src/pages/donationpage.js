import React from 'react';
import { Grid, Box, TextField, Button, Card, Typography } from '@mui/material';
import unclechaseDon from '../images/unclechaseDon.png';
const Donation = () => {
    return (
    
        <Box textAlign="center">

            <Typography variant='h2' gutterbottom color="secondary" align="center">
                Want to Support Your First Ammendment Rights? Donate Here
                        
            </Typography>
            <Button variant="outlined" color="secondary" href="https://www.paypal.com/donate/?business=HEL6SQD7GGVX4&amount=1&no_recurring=0&item_name=Defend+Your+Free+Speech+Today%21&currency_code=USD">$1.00</Button>
            <Button variant="outlined" color="secondary" href="https://www.paypal.com/donate/?business=HEL6SQD7GGVX4&amount=5&no_recurring=0&item_name=Defend+Your+Free+Speech+Today%21&currency_code=USD">$5.00</Button>
            <Button variant="outlined" color="secondary" href="https://www.paypal.com/donate/?business=HEL6SQD7GGVX4&amount=10&no_recurring=0&item_name=Defend+Your+Free+Speech+Today%21&currency_code=USD">$10.00</Button>
            <Button variant="outlined" color="secondary" href="https://www.paypal.com/donate/?business=HEL6SQD7GGVX4&no_recurring=0&item_name=Defend+Your+Free+Speech+Today%21&currency_code=USD">Custom</Button>
            <div><img textAlign="center" src={unclechaseDon}></img></div>
            
            
        </Box>
       
    );
}

export default Donation;