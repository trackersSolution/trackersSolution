'use client';
import React, { FC } from 'react'
import {Theme} from '@mui/material'
import {makeStyles} from 'tss-react/mui'
import Header from './topbar/header/Header'
import ServicesOffered from './services/ServicesOffered';
import Industries from './industries/Industries';
import ClientsAndPartners from './clientsAndPartners/ClientsAndPartners';
import ContactForm from './contactForm/ContactForm';
import Footer from './bottom/footer/Footer';
import CopyRights from './bottom/bottombar/CopyRights';
import Banner from './topbar/banner/Banner';

const useStyles = makeStyles()((_theme: Theme) =>({
    root:{}
}));
export interface LandingPageProps {
    text?: string
}

const LandingPage: FC<LandingPageProps> = ( props ) => {
const { classes } = useStyles();

  return (
  <>
  <Header/>
  <Banner/>
  <ServicesOffered/>
  <Industries/>
  <ClientsAndPartners/>
  <ContactForm/>
  <Footer/>
  <CopyRights/>
  </>
  )
}
export default LandingPage;