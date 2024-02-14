'use client';
import React, { FC } from 'react'
import {Grid, Theme} from '@mui/material'
import {makeStyles} from 'tss-react/mui'

const useStyles = makeStyles()((_theme: Theme) =>({
    root:{}
}));
export interface AddressProps {
    text?: string
}

const Address: FC<AddressProps> = ( props ) => {
const { classes } = useStyles();

  return (
    <div>
      <Grid
        container
        spacing={1}
        direction={{ xs: "column", md: "column" }}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
        color='white'
      >
        <Grid item xs={12} md={2}>
          United Arab Emirates
          Termani Arts offices, 
          5th floor- office no. 554
          Business Bay, Dubai, UAE
        </Grid>
        <Grid item xs={12} md={2}>
          +971 522142913
        </Grid>
        <Grid item xs={12} md={2}>
          (04)8343814
        </Grid>
        <Grid item xs={12} md={2}>
          info@trackers.ae
        </Grid>

      </Grid>
    </div>
  )
}
export default Address;