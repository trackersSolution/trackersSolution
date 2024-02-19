import React, { FC } from "react";
import {
  Box,
  Grid,
  Typography,
  Theme,
  CSSObject,
  Container,
} from "@mui/material";
import Form from "./Form";
import { makeStyles } from "tss-react/mui";
import contactusBackground from "../../../../../public/contactUsbackground.svg";
import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    borderRadius: "10px",
    // boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    padding: "30px 0px",
    // marginTop: { xs: '100px', md: '400px' },
  },
  formContainer: {
    maxWidth: "100%",
    padding: "20px",
  },
  infoContainer: {
    backgroundImage: `url("/Mask group.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "8px",
    color: "black",
    padding: "20px",
    margin: "20px",
    width: "100%",
    maxWidth: "500px",
    // boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  infoText: {
    // marginBottom: "80px",
    fontSize: "1.725rem",
    fontWeight: "600",
    color: "white",
    margin: 0,
    textTransform:"uppercase",
  },
  address_card: {
    backgroundImage: `url("/inductries background.jpeg")`,
  },
  form_address_box: {
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    // margin: "20px",
    backgroundColor: "#eceff7",
  },
  map_icon: {
    color: "white",
    fontSize: "2.5rem",
  },
  add_typo_body1: {
    color: "white",
    fontWeight: 500,
    fontSize: "1.1rem",

  },
  add_box: {
    padding: "15px 0px",
  },
  form_Add_container:{
    margin:"30px 0px"
  }
}));

export interface ContactFormProps {
  text?: string;
}

const ContactForm: FC<ContactFormProps> = (props) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h2" color="initial">
        It's Very Easy To Contact Us
      </Typography>
      <Container maxWidth="lg" className={classes.form_Add_container}>
        <Grid
          container
          spacing={3}
          direction={{ xs: "column", md: "row" }}
          justifyContent="center"
          alignItems="stretch"
          alignContent="stretch"
          wrap="wrap"
          className={classes.form_address_box}
        >
          <Grid item xs={12} md={6} className={classes.formContainer}>
            <Form />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={classes.infoContainer}>
              <Box className={classes.add_box}>
                <MapIcon className={classes.map_icon} />
                <Typography
                  variant="h5"
                  className={classes.infoText}
                  gutterBottom
                >
                  Our Address
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  className={classes.add_typo_body1}
                >
                  Tamani Arts offices, 5th floor - office no 554, Business
                  Bay,Dubai 
                </Typography>
              </Box>
              <Box className={classes.add_box}>
                <PhoneIcon className={classes.map_icon} />
                <Typography
                  variant="h5"
                  className={classes.infoText}
                  gutterBottom
                >
                  OUR PHONE
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  className={classes.add_typo_body1}
                >
                  (04) 834 3814, +971 52 214 2913
                </Typography>
              </Box>
              <Box className={classes.add_box}>
                <MailIcon className={classes.map_icon} />
                <Typography
                  variant="h5"
                  className={classes.infoText}
                  gutterBottom
                >
                  OUR MAILBOX
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  className={classes.add_typo_body1}
                >
                  info@trackers.ae
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactForm;
