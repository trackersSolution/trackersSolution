// Import necessary components and hooks
import React, { FC } from "react";
import { Box, Grid, Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((_theme: Theme) => ({
  root: {},
}));

export interface FooterProps {
  text?: string;
}

const Footer: FC<FooterProps> = (props) => {
  const { classes } = useStyles();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        alignContent="stretch"
        wrap="wrap"
      >
        <Grid xs={12} md={3}>
          <Box
            mt={4}
            p={4}
            sx={{
              background: "linear-gradient(to right, #ff6666, #ff4d4d)",
              borderRadius: "8px",
              color: "white",
              height: "100px",
              margin: "40px",
              width: "50%",
            }}
          >
            Logo and Contact details
          </Box>
        </Grid>
        <Grid xs={12} md={3}>
          <Box
            mt={4}
            p={4}
            sx={{
              background: "linear-gradient(to right, #ff6666, #ff4d4d)",
              borderRadius: "8px",
              color: "white",
              height: "100px",
              margin: "40px",
              width: "50%",
            }}
          >
            Company details
          </Box>
        </Grid>
        <Grid xs={12} md={3}>
          <Box
            mt={4}
            p={4}
            sx={{
              background: "linear-gradient(to right, #ff6666, #ff4d4d)",
              borderRadius: "8px",
              color: "white",
              height: "100px",
              margin: "40px",
              width: "50%",
            }}
          >
            Our Services
          </Box>
        </Grid>
        <Grid xs={12} md={3}>
          <Box
            mt={4}
            p={4}
            sx={{
              background: "linear-gradient(to right, #ff6666, #ff4d4d)",
              borderRadius: "8px",
              color: "white",
              height: "100px",
              margin: "40px",
              width: "50%",
            }}
          >
            Industries
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
