import React, { FC } from "react";
import { Box, Grid, Typography, Theme, Container } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import logicrental from "../../../../../public/logicRental.svg";
import injazrental from "../../../../../public/injazrental.svg";
import alghaza from "../../../../../public/alGhazaltransport.svg";
import Partner from "./Partner";

const useStyles = makeStyles()((_theme: Theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "30px 0px",
  },
  client_grid: {
    "&:hover": {
      background: "#014189",
    },
  },
}));

const clients = [
  { id: 1, name: "Logic Rental", logo: logicrental },
  { id: 2, name: "Injaz Rental", logo: injazrental },
  { id: 3, name: "AL Ghazal Transport", logo: alghaza },
];

export interface ClientsAndPartnersProps {
  text?: string;
}

const ClientsAndPartners: FC<ClientsAndPartnersProps> = (props) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.main}>
      <Typography variant="h2" color="initial" gutterBottom>
        Clients & Partners
      </Typography>
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center">
          {clients.map(({ id, name, logo }) => (
            <Grid key={id} item xs={12} sm={3} md={3} lg={3} xl={3}>
              <Partner logo={logo} name={name} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ClientsAndPartners;
