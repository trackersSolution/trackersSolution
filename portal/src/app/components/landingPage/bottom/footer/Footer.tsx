import React, { FC } from "react";
import { Box, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import About from "./About";
import Company from "./Company";
import Support from "./Support";
import Address from "./Address";

const useStyles = makeStyles()((_theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    width: "100%",
    borderRadius: "10px",
    color:'white',
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    backgroundColor: 'black',
  },
  section: {
    borderRadius: "8px",
    color: "black",
    height: "auto",
    padding: "10px", // Add padding for content spacing
    textAlign: "center", // Center text
  },
}));

export interface FooterProps {
  text?: string;
}

const Footer: FC<FooterProps> = (props) => {
  const {classes} = useStyles();

  return (
    <Box className={classes.root}>
    
      <Grid
        container
        spacing={3} // Increase spacing between sections
        direction="row"
        justifyContent="center"
      >
        <Grid item xs={12} md={3}>
          <Box className={classes.section}>
            <About />
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box className={classes.section}>
            <Company />
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box className={classes.section}>
            <Support />
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box className={classes.section}>
            <Address />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
