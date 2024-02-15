"use client";
import React, { FC } from "react";
import { Grid, Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Link from "next/link";

const useStyles = makeStyles()((_theme: Theme) => ({
  root: {},
}));
export interface SupportProps {
  text?: string;
}

const Support: FC<SupportProps> = (props) => {
  const { classes } = useStyles();

  return (
    <div>
      <Grid
        container
        spacing={1}
        direction={{ xs: "column", md: "column" }}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
        color="white"
      >
        <Grid item xs={12} md={2}>
          <Link href="/faqs">FAQ's</Link>
        </Grid>
        <Grid item xs={12} md={2}>
          <Link href="/privacyPolicy">Privacy Policy</Link>
        </Grid>
        <Grid item xs={12} md={2}>
          <Link href="/termsandConditions">Terms & Conditions</Link>
        </Grid>
        <Grid item xs={12} md={2}>
          <Link href="/contact">CONTACT US</Link>
        </Grid>
      </Grid>
    </div>
  );
};
export default Support;
