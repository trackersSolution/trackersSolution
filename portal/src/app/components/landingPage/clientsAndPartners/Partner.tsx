import React, { FC } from "react";
import { Box, Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Image from "next/image";

const useStyles = makeStyles()((_theme: Theme) => ({
  root: {},
}));

export interface PartnerProps {
  name?: string;
  logo?: string;
}

const Partner: FC<PartnerProps> = ({ name, logo }) => {
  const { classes } = useStyles();

  return (
    <div>
      <Box
        mt={4}
        p={2} 
        sx={{
          background: "#EFF5FF",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)", 
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "150px", 
          margin: "20px",
        }}
      >
        <Image src={logo!} alt={name!} height={120} width={180} /> 
      </Box>
    </div>
  );
};

export default Partner;
