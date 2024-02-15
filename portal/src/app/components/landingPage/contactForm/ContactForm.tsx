import React, { FC } from 'react';
import { Box, Grid, Typography, Theme, CSSObject } from '@mui/material';
import Form from './Form';
import { makeStyles } from 'tss-react/mui';
import contactusBackground from '../../../../../public/contactUsbackground.svg'
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
const useStyles = makeStyles()((theme: Theme)=> ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    // marginTop: { xs: '100px', md: '400px' },
  },
  formContainer: {
    maxWidth: '100%',
    padding: '20px',
  },
  infoContainer: {
    background: `url(${contactusBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '8px',
    color: 'black',
    padding: '20px',
    margin: '20px',
    width: '100%',
    maxWidth: '500px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
    textAlign: 'center', 
  },
  infoText: {
    marginBottom: '80px', 
  },
}));

export interface ContactFormProps {
  text?: string;
}

const ContactForm: FC<ContactFormProps> = (props) => {
  const {classes} = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h2" color="initial">
        It's Very Easy To Contact Us
      </Typography>
      <Grid
        container
        spacing={3}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="stretch"
        alignContent="stretch"
        wrap="wrap"
      >
        <Grid item xs={12} md={6} className={classes.formContainer}>
          <Form />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className={classes.infoContainer}>
          <MapIcon/>
          <Typography variant="h5" className={classes.infoText} gutterBottom>
              Our Information
            </Typography>
            <Typography className={classes.infoText}>
              <strong>Address:</strong> 123 Main Street, Cityville
            </Typography>
            <PhoneIcon/>
            <Typography className={classes.infoText}>
              <strong>Phone:</strong> +1 (555) 123-4567
            </Typography>
            <MailIcon/>
            <Typography className={classes.infoText}>
              <strong>Email:</strong> info@example.com
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
