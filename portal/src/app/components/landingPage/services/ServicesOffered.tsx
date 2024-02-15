"use client";
import React, { FC } from "react";
import { Box, Container, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import webdev from "../../../../../public/webdev.svg";
import mobileDev from "../../../../../public/mobileDev.svg";
import dm from "../../../../../public/dm.svg";
import gps from "../../../../../public/gps.svg";
import load from "../../../../../public/transport.svg";
import fuel from "../../../../../public/fuel.svg";

import Offeredservice from "./offeredservice";

const useStyles = makeStyles()((_theme: Theme) => ({
  root: {},
  service_offered_box: {
    paddingTop: "25px",
    paddingBottom: "25px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  service_h3: {
    fontSize: "2rem",
    fontWeight: 500,
  },
  service_h2: {
    fontSize: "2.5rem",
    fontWeight: 600,
  },
}));
export interface ServicesOfferedProps {
  text?: string;
}

const services = [
  {
    img: webdev,
    main: "Web Development",
    body: "We develop websites and applications that are easy to use, visually appealing, and accessible to a wide range of devices.",
  },
  {
    img: mobileDev,
    main: "Mobile Development",
    body: "We provide best-in-class mobile app development services focusing on drafting concepts and developing truly successful apps.",
  },
  {
    img: dm,
    main: "Digital Marketing",
    body: "We offer comprehensive digital marketing solutions to enhance your online presence and reach your target audience effectively.",
  },
  {
    img: gps,
    main: "Vehicle GPS Tracking",
    body: "We provide accurate vehicle GPS tracking services to monitor vehicle location, direction, speed, and more.",
  },
  {
    img: load,
    main: "Vehicle Load Monitoring System",
    body: "Our vehicle load monitoring system provides real-time data on vehicle location, direction, time, and speed.",
  },
  {
    img: fuel,
    main: "Fuel Management",
    body: "We offer fuel management solutions to monitor fuel usage, optimize fuel consumption, and reduce costs.",
  },
];
const ServicesOffered: FC<ServicesOfferedProps> = (props) => {
  const { classes } = useStyles();

  return (
    <>
      <Box
        className={classes.service_offered_box}
        // sx={{
        //   marginTop: "700px",
        //   paddingTop: "25px",
        //   paddingBottom: "25px",
        //   display: "flex",
        //   flexDirection: "column",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   height: "100%",
        //   width: "100%",
        //   borderRadius: "10px",
        //   boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        // }}
      >
        <Typography variant="h3" color="initial" className={classes.service_h3}>
          WHAT WE CAN DO FOR YOU
        </Typography>
        <Typography variant="h2" color="initial" className={classes.service_h2}>
          SEVICES WE CAN HELP YOU WITH
        </Typography>
        <Container maxWidth="xl">
          <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="center"
            alignItems="center"
            alignContent="stretch"
            wrap="wrap"
          >
            {services.map(({ img, main, body }) => (
              <Grid key={main} item xs={12} sm={6} md={4} lg={4} xl={4}>
                <Offeredservice img={img} main={main} body={body} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default ServicesOffered;
