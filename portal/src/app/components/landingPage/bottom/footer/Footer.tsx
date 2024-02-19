import React, { FC } from "react";
import { Box, Container, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import About from "./About";
import Company from "./Company";
import Support from "./Support";
import Address from "./Address";
import CopyRights from "../bottombar/CopyRights";

const useStyles = makeStyles()((_theme: Theme) => ({
  root: {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    // height: "auto",
    // width: "100%",
    // borderRadius: "10px",
    // color: "white",
    // boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    backgroundColor: "black",
  },
  section: {
    borderRadius: "8px",
    color: "black",
    height: "auto",
    padding: "10px", // Add padding for content spacing
    textAlign: "center", // Center text
  },
  footer_background: {
    backgroundImage: `url("/world map 1@2x.png")`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  },
}));

export interface FooterProps {
  text?: string;
}

const Footer: FC<FooterProps> = (props) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3} // Increase spacing between sections
          direction="row"
          justifyContent="center"
        >
          <Grid item xs={12} md={3} sm={3} lg={3} xl={3}>
            <Box className={classes.section}>
              <About />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={9}
            sm={9}
            lg={9}
            xl={9}
            className={classes.footer_background}
          >
            <Grid container spacing={3}>
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
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <CopyRights />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
