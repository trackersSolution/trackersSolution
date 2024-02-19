import React, { FC } from "react";
import { Box, Theme, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Image from "next/image";

const useStyles = makeStyles()((_theme: Theme) => ({
  root: {},
  image_box: {
    background: "black",
    padding: "10px",
  },
  image_main_box: {
    textAlign: "right",
  },
  industry_typography: {
    fontSize: "25px",
    height: "150px",
    padding: "20px 20px",
    fontWeight: "600",
  },
  count_typo: {
    fontWeight: 900,
    fontSize: "2.725rem",
    padding: "20px 20px",
    color: "#caccd3",
  },
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
        sx={{
          background: "white",
          borderRadius: "8px",
          color: "black",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "600px",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: "303px",
        }}
      >
        <Box flex="1">
          <Typography
            variant="h4"
            color="initial"
            className={classes.count_typo}
          >
            {count}
          </Typography>
          <Typography
            variant="h5"
            color="initial"
            className={classes.industry_typography}
          >
            {item}
          </Typography>
        </Box>
        <Box
          flex="1"
          display="flex"
          justifyContent="right"
          alignItems="center"
          className={classes.image_main_box}
        >
          <Image
            src={image!}
            alt="image"
            height={60}
            width={60}
            className={classes.image_box}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Industry;
