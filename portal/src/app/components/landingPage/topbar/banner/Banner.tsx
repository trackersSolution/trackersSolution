// Import necessary components and hooks
import React, { FC } from "react";
import { Theme, Grid, Box, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles((_theme: Theme) => ({
  root: {},
}));

export interface BannerProps {
  text?: string;
}

const Banner: FC<BannerProps> = (props) => {
  const { classes } = useStyles();

  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      alignContent="stretch"
      wrap="wrap"
      width="100%"
    >
      <Box
        mt={4}
        p={4}
        sx={{
          background: "linear-gradient(to right, #ff6666, #ff4d4d)",
          color: "white",
          height: "420px",
          margin: "40px",
          width: "100%",
          borderRadius: 8,
        }}
      >
        <Typography variant="h4">Banner</Typography>
        {/* You can add your banner content here */}
      </Box>
    </Grid>
  );
};

export default Banner;
