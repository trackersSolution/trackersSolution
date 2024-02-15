import React, { FC } from "react";
import { Box, Theme, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Image from "next/image";

const useStyles = makeStyles()((_theme: Theme) => ({
  box: {
    background: "linear-gradient(to right, #D9D9D9, #D9D9D0)",
    borderRadius: "8px",
    color: "white",
    padding: "20px",
    margin: "20px 0", 
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", 
  },
  image: {
    marginBottom: "10px", 
  },
}));

export interface OfferedserviceProps {
  main?: string;
  img?: string;
  body?: string;
}

const Offeredservice: FC<OfferedserviceProps> = ({ main, img, body }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.box}>
      <Image src={img!} height={50} width={50} alt="webdev" className={classes.image} />
      <Typography variant="h3" color="initial" align="center" gutterBottom>
        {main}
      </Typography>
      <Typography variant="body1" color="initial" align="center">
        {body}
      </Typography>
    </Box>
  );
};

export default Offeredservice;
