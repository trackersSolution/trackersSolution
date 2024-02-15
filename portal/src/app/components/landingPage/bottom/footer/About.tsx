import React, { FC } from "react";
import { Box, Typography, Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Image from "next/image";
import logo from "../../../../../../public/logo.svg";

const useStyles = makeStyles()((_theme: Theme) => ({
  root: {
    borderRadius: "8px",
    color: "black",
    width: "100%",
    maxWidth: "600px", 
  },
  image: {
   color:'white'
  },
  content: {
    color:'white'
  },
}));

export interface AboutProps {
  text?: string;
}

const About: FC<AboutProps> = (props) => {
  const { classes } = useStyles();

  return (
    <Box
     className={classes.root}
    >
      <Image
        src={logo}
        alt="logo"
        height={100}
        width={100}
        className={classes.image} 
      />
      <Typography
        variant="body1"
        color="initial"
        className={classes.content} // Apply content styling class
      >
        TRACKERS is an all-in-one fleet performance management solution.
        Dedicated to clients managing fleets in UAE and Saudi Arabia in various
        sectors including Refrigerated Cargo, Ready Mix Industry, Waste
        Management, School Transport Solutions, AI Driver Evaluation Simulator,
        and Fuel Monitoring. We also offer Web designing, App development, and
        Software development services. Our advanced web solution provides full
        visibility to manage your fleet and supports multiple Telematics Devices
        including advanced OBD-GPS devices.
      </Typography>
    </Box>
  );
};

export default About;
