import React, { FC } from "react";
import { Theme, Grid, Box, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Image from "next/image";
import banner from "../../../../../../public/banner1.svg";

const useStyles = makeStyles()((_theme: Theme) => ({
  root: {},
  banner_image: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  banner_box:{
    marginTop: "100px",
  }
}));

export interface BannerProps {
  text?: string;
}

const Banner: FC<BannerProps> = (props) => {
  const { classes } = useStyles();

  return (
    // <Box
    //   width="100%"
    //   display="flex"
    //   justifyContent="center"
    //   alignItems="center"
    //   margin={0}
    //   padding={0}
    // >
    <Box className={classes.banner_box}>
      <Image src={banner} alt="banner1" className={classes.banner_image} />
    </Box>
    // </Box>
  );
};

export default Banner;
