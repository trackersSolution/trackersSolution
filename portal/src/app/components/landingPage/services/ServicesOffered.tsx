'use client';
import React, { FC } from 'react'
import {Box, Grid, Theme, Typography} from '@mui/material'
import {makeStyles} from 'tss-react/mui'

const useStyles = makeStyles()((_theme: Theme) =>({
    root:{}
}));
export interface ServicesOfferedProps {
    text?: string
}

const ServicesOffered: FC<ServicesOfferedProps> = ( props ) => {
// const { classes } = useStyles();

  return (
  <>
  <Box 
  sx={{
    marginTop:'200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    // backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    // marginLeft:'150px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  }}
  >
   <Typography variant="h3" color="initial">WHAT WE CAN DO FOR YOU</Typography>
<Typography variant="h2" color="initial">SEVICES WE CAN HELP YOU WITH</Typography>
  <Grid
    container
    spacing={1}
    direction="row"
    justifyContent="center"
    alignItems="center"
    alignContent="stretch"
    wrap="wrap"
    
  >
      <Grid xs={12} md={4}>
        <Box
        mt={4}
        p={4}
        style={{
          background: 'linear-gradient(to right, #ff6666, #ff4d4d)',
        borderRadius: '8px',
        color: 'white',
        height: '100px',
        margin:'40px',
        width: '50%',
        }}>
            Web Development
            </Box>
    </Grid>
    <Grid xs={12} md={4}>
    <Box
        mt={4}
        p={4}
        style={{
          background: 'linear-gradient(to right, #ff6666, #ff4d4d)',
        borderRadius: '8px',
        color: 'white',
        height: '100px',
        margin:'40px',
        width: '50%',
        }}>
             Mobile Development
            </Box>
      
    </Grid>
    <Grid xs={12} md={4}>
    <Box
        mt={4}
        p={4}
        style={{
          background: 'linear-gradient(to right, #ff6666, #ff4d4d)',
        borderRadius: '8px',
        color: 'white',
        height: '100px',
        margin:'40px',
        width: '50%',
        }}>
                 Digital Marketing
            </Box>
 
    </Grid>
    <Grid xs={12} md={4}>
    <Box
        mt={4}
        p={4}
        style={{
          background: 'linear-gradient(to right, #ff6666, #ff4d4d)',
        borderRadius: '8px',
        color: 'white',
        height: '100px',
        margin:'40px',
        width: '50%',
        }}>
             Vehicle GPS Tracking
            </Box>

    </Grid>
    <Grid xs={12} md={4}>
    <Box
        mt={4}
        p={4}
        style={{
          background: 'linear-gradient(to right, #ff6666, #ff4d4d)',
        borderRadius: '8px',
        color: 'white',
        height: '100px',
        margin:'40px',
        width: '50%',
        }}>
           Vehicle Load Monitoring System
            </Box>
     
    </Grid>
    <Grid xs={12} md={4}>
    <Box
        mt={4}
        p={4}
        style={{
          background: 'linear-gradient(to right, #ff6666, #ff4d4d)',
        borderRadius: '8px',
        color: 'white',
        height: '100px',
        margin:'40px',
        width: '50%',
        }}>
           Fuel Management
            </Box>
    
    </Grid>
  </Grid>
  </Box>
  </>
  )
}
export default ServicesOffered;