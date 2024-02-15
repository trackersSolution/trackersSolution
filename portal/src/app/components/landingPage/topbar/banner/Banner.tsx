import React, { FC } from "react";
import { Theme, Grid, Box, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Image from "next/image";
import banner from '../../../../../../public/banner1.svg'

const useStyles = makeStyles()((_theme: Theme) =>({
  root:{}
}));

export interface BannerProps {
  text?: string;
}

const Banner: FC<BannerProps> = (props) => {
  const { classes } = useStyles();

  return (
    <Box
      width="100%" 
      display="flex"
      justifyContent="center" 
      alignItems="center"
      margin={0} 
      padding={0}  
    >
      <Image
        src={banner}
        alt="banner1"
        layout="fill" 
      />
    </Box>
  );
};

export default Banner;
