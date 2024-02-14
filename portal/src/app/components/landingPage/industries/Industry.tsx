import React, { FC } from "react";
import { Box, Theme, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Image from "next/image";

const useStyles = makeStyles()((_theme: Theme) => ({
  root: {},
}));

export interface IndustryProps {
  item?: string | number;
  count?: string;
  image?: string;
}

const Industry: FC<IndustryProps> = ({ item, count, image }) => {
  const { classes } = useStyles();

  return (
    <div>
      <Box
        mt={4}
        p={4}
        sx={{
          background: "#f9f9f9", // Light gray background
          borderRadius: "8px",
          color: "black",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Box shadow for depth
          width: "90%", // Adjusted width to fit content better
          maxWidth: "600px", // Maximum width for responsiveness
          margin: "0 auto", // Center the box horizontally
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box flex="1">
          <Typography variant="h4" color="initial">
            {count}
          </Typography>
          <Typography variant="h5" color="initial">
            {item}
          </Typography>
        </Box>
        <Box flex="1" display="flex" justifyContent="center" alignItems="center">
          <Image src={image!} alt="image" height={200} width={300} />
        </Box>
      </Box>
    </div>
  );
};

export default Industry;
