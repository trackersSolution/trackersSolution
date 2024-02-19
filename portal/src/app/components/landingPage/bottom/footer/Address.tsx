"use client";
import React, { FC } from "react";
import { Box, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import PhoneIcon from "@mui/icons-material/Phone";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import HomeIcon from "@mui/icons-material/Home";

const useStyles = makeStyles()((_theme: Theme) => ({
  root: {
    marginTop: "6rem",
  },
  address_icons:{
    display:"flex",
    alignItems:"center",
    justifyContent:"space-around"
  },
  address_typo:{
    margin:"0px",
    paddingLeft:"8px"
  }
}));
export interface AddressProps {
  text?: string;
}

const Address: FC<AddressProps> = (props) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Grid
        container
        spacing={1}
        direction={{ xs: "column", md: "column" }}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
        color="white"
      >
        <Grid item xs={12} md={2}>
          <Typography variant="h4" color="white" gutterBottom>
            Address
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant="body1" color="white" gutterBottom>
            United Arab Emirates Termani Arts offices, 5th floor- office no. 554
            Business Bay, Dubai, UAE
          </Typography>
        </Grid>
        <Grid item xs={12} md={2} className={classes.address_icons}>
          <PhoneIcon />
          <Typography variant="body1" color="white" gutterBottom className={classes.address_typo}>
            +971 522142913
          </Typography>
        </Grid>
        <Grid item xs={12} md={2} className={classes.address_icons}>
          <PhoneForwardedIcon />
          <Typography variant="body1" color="white" gutterBottom className={classes.address_typo}>
            (04)8343814
          </Typography>
        </Grid>
        <Grid item xs={12} md={2} className={classes.address_icons}>
          <HomeIcon />
          <Typography variant="body1" color="white" gutterBottom className={classes.address_typo}>
            info@trackers.ae
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Address;
