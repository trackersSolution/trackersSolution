'use client';
import React, { FC, useState } from 'react';
import { Theme, AppBar, Toolbar, IconButton, Typography, Grid, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Menu } from '@mui/icons-material';
import Image from 'next/image';

const useStyles = makeStyles()((_theme: Theme) => ({
  root: {},
  drawerPaper: {
    width: '60%',
  },
}));

export interface HeaderProps {
  text?: string;
}

const Header: FC<HeaderProps> = (props) => {
  const { classes } = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');

  // State for handling drawer open/close
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Function to toggle drawer state
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ color: 'white', backgroundColor: '#014189' }}>
        <Toolbar>
          {isMobile && (
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <Menu />
            </IconButton>
          )}

          <Image src="/portal/public/logo.svg" height={20} width={10} alt="logo" />
          
          {/* Display menu items in AppBar for larger screens */}
          {!isMobile && (
            <Grid
              container
              spacing={{ xs: 1, md: 2 }}
              direction={{ xs: 'column', md: 'row' }}
              justifyContent="center"
              alignItems="center"
              alignContent="stretch"
              wrap="wrap"
              paddingLeft={20}
            >
              <Grid item xs={12} md={2}>
                HOME
              </Grid>
              <Grid item xs={12} md={2}>
                SERVICES
              </Grid>
              <Grid item xs={12} md={2}>
                INDUSTRY
              </Grid>
              <Grid item xs={12} md={2}>
                BLOG
              </Grid>
              <Grid item xs={12} md={2}>
                ABOUT US
              </Grid>
              <Grid item xs={12} md={2}>
                CONTACT US
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
          {['HOME', 'SERVICES', 'INDUSTRY', 'BLOG', 'ABOUT US', 'CONTACT US'].map((text, index) => (
            <ListItem  key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
