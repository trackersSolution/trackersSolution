"use client";
import React, { FC } from "react";
import { Theme, Grid } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Link from "next/link";

const useStyles = makeStyles()((_theme: Theme) => ({
  root: {},
}));
export interface CompanyProps {
  text?: string;
}

const Company: FC<CompanyProps> = (props) => {
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
        color='white'
      >
        <Grid item xs={12} md={2}>
          <Link href="/">HOME</Link>
        </Grid>
        <Grid item xs={12} md={2}>
          <Link href="/services">SERVICES</Link>
        </Grid>
        <Grid item xs={12} md={2}>
          <Link href="/industry">INDUSTRY</Link>
        </Grid>
        <Grid item xs={12} md={2}>
          <Link href="/blog">BLOG</Link>
        </Grid>
        <Grid item xs={12} md={2}>
          <Link href="/about">ABOUT US</Link>
        </Grid>
        <Grid item xs={12} md={2}>
          <Link href="/contact">CONTACT US</Link>
        </Grid>
      </Grid>
    </div>
  );
};
export default Company;
