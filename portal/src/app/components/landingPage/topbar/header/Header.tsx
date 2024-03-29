"use client";
import React, { FC, useState } from "react";
import {
  Theme,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { Menu } from "@mui/icons-material";
import Image from "next/image";
import logo from "../../../../../../public/logo.svg";
import Link from "next/link";
const useStyles = makeStyles()((_theme: Theme) => ({
  root: {},
  drawerPaper: {
    width: "60%",
  },
  header_navlinks: {
    fontSize: "17px",
    fontWeight: 600,
    fontFamily: "system-ui",
  },
  logo_image: {
    objectFit: "contain",
  },
}));

export interface HeaderProps {
  text?: string;
}

const Header: FC<HeaderProps> = (props) => {
  const { classes } = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ color: "black", backgroundColor: "white" }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <Menu />
            </IconButton>
          )}

          <Image src={logo} height={100} width={100} alt="logo" className={classes.logo_image} />

          {!isMobile && (
            <Grid
              container
              spacing={{ xs: 1, md: 2 }}
              direction={{ xs: "column", md: "row" }}
              justifyContent="center"
              alignItems="center"
              alignContent="stretch"
              wrap="wrap"
              paddingLeft={20}
            >
              <Grid item xs={12} md={2}>
                <Link href="/" className={classes.header_navlinks}>
                  HOME
                </Link>
              </Grid>
              <Grid item xs={12} md={2}>
                <Link href="/services" className={classes.header_navlinks}>
                  SERVICES
                </Link>
              </Grid>
              <Grid item xs={12} md={2}>
                <Link href="/industry" className={classes.header_navlinks}>
                  INDUSTRY
                </Link>
              </Grid>
              <Grid item xs={12} md={2}>
                <Link href="/blog" className={classes.header_navlinks}>
                  BLOG
                </Link>
              </Grid>
              <Grid item xs={12} md={2}>
                <Link href="/about" className={classes.header_navlinks}>
                  ABOUT US
                </Link>
              </Grid>
              <Grid item xs={12} md={2}>
                <Link href="/contact" className={classes.header_navlinks}>
                  CONTACT US
                </Link>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile view */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        classes={{ paper: classes.drawerPaper }}
      >
        <List>
          {[
            "HOME",
            "SERVICES",
            "INDUSTRY",
            "BLOG",
            "ABOUT US",
            "CONTACT US",
          ].map((text, index) => (
            <ListItem key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
