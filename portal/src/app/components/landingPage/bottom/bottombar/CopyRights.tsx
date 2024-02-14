import React, { FC } from 'react';
import { Theme, Typography, Box, Container, Grid } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';

const useStyles = makeStyles()((_theme: Theme) => ({
  root: {},
}));

export interface CopyRightsProps {
  text?: string;
}

const CopyRights: FC<CopyRightsProps> = (props) => {
  const { classes } = useStyles();

  return (
    <Box
      mt={4}
      p={4}
      style={{
        background: 'black',
        borderRadius: '8px',
        color: 'white',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
      }}
    >
      <Container>
        <Grid container direction="row" justifyContent="space-between" alignItems="center" alignContent="center" wrap="wrap" spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" align="left">
              © {new Date().getFullYear()} CopyRights : Trackers.ae reserved
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} container justifyContent="flex-end">
            <Grid item>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <XIcon/>
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FacebookIcon/>
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon/>
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramIcon/>
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                <TelegramIcon/>
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <YouTubeIcon/>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CopyRights;
