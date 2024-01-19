// Import necessary components and hooks
import React, { FC } from 'react';
import { Box, Grid, Typography, Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import Form from './Form';

const useStyles = makeStyles((_theme: Theme) => ({
  root: {},
}));

export interface ContactFormProps {
  text?: string;
}

const ContactForm: FC<ContactFormProps> = (props) => {
  const { classes } = useStyles();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        marginTop: { xs: '100px', md: '400px' }, // Responsive margin-top
        marginLeft: '50px',
      }}
    >
      <Typography variant="h2" color="initial">
        It's Very Easy To Contact Us
      </Typography>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        alignContent="stretch"
        wrap="wrap"
      >
        <Grid xs={12} md={6}>
          <Box>
            <Form />
          </Box>
        </Grid>
        <Grid xs={12} md={6}>
          <Box
            mt={4}
            p={4}
            sx={{
              background: 'linear-gradient(to right, #ff6666, #ff4d4d)',
              borderRadius: '8px',
              color: 'white',
              height: '420px',
              margin: '40px',
              width: '70%',
            }}
          >
            <Typography variant="h5" gutterBottom>
              Our Information
            </Typography>
            <Typography>
              <strong>Address:</strong> 123 Main Street, Cityville
            </Typography>
            <Typography>
              <strong>Phone:</strong> +1 (555) 123-4567
            </Typography>
            <Typography>
              <strong>Email:</strong> info@example.com
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
