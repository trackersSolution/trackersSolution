// Import necessary components and hooks
import React, { FC } from 'react';
import { Theme, Typography, Box, Container, Grid } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

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
        background: 'linear-gradient(to right, #ff6666, #ff4d4d)',
        borderRadius: '8px',
        color: 'white',
        width: '100%',
      }}
    >
      <Container>
        <Grid container justifyContent="center">
          <Typography variant="body2">
            CopyRights © {new Date().getFullYear()} reserved
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
};

export default CopyRights;
