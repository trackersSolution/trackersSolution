// Import necessary components and hooks
import React, { FC } from 'react';
import { Box, Grid, Typography, Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles((_theme: Theme) => ({
  root: {},
}));

export interface ClientsAndPartnersProps {
  text?: string;
}

const ClientsAndPartners: FC<ClientsAndPartnersProps> = (props) => {
  const { classes } = useStyles();

  return (
    <>
      <Box
        sx={{
          marginTop: { xs: '100px', md: '400px' }, // Responsive margin-top
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        }}
      >
        <Typography variant="h2" color="initial">
          Clients & Partners
        </Typography>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="stretch"
          wrap="wrap"
        >
          {[
            { id: 1, name: 'Logic Rental' },
            { id: 2, name: 'Injaz Rental' },
            { id: 3, name: 'AL Ghazal Transport' },
          ].map((item) => (
            <Grid key={item.id} xs={12} md={4}>
              <Box
                mt={4}
                p={4}
                sx={{
                  background: 'linear-gradient(to right, #ff6666, #ff4d4d)',
                  borderRadius: '8px',
                  color: 'white',
                  height: '100px',
                  margin: '40px',
                  width: '50%',
                }}
              >
                {item.name}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ClientsAndPartners;
