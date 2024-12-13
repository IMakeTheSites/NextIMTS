import Head from 'next/head';
import React, { useEffect, Fragment } from 'react';
import HeaderLogos from '../components/HeaderLogos';
// import Portfolio from '../components/portfolio/Portfolio';
// import Features from '../components/Features/Features';
// import Blog from '../components/Blog/Blog';
// import GetStarted from '../components/GetStarted/GetStarted';
// import InquiryForm from '../components/InquiryForm/InquiryForm';
import { Box } from '@mui/material';
import Header from '../components/Header';

export default function HomePage() {
  return (
    <Box>
      <Fragment>
        <Head>
          <title>I Make the Sites | Home</title>
          <meta
            name="description"
            content="We help your organization get more attention online with the best apps and websites!"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <HeaderLogos />
      </Fragment>
    </Box>
  );
}
