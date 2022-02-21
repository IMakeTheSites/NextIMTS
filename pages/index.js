import Head from 'next/head'
import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeaderLogos from '../components/HeaderLogos';
import Portfolio from '../components/portfolio/Portfolio';
import Features from '../components/Features/Features';
import Slider from '../components/Slider/Slider';
import Blog from '../components/Blog/Blog';
import GetStarted from '../components/GetStarted/GetStarted';
import InquiryForm from '../components/InquiryForm/InquiryForm';
import { Fragment } from 'react';

function HomePage() {
    return (
    <Fragment>
      <Head>
        <title>I Make the Sites | Home</title>
        <meta name="description" content="We help your organization get more attention online with the best apps and websites!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeaderLogos />
      <Portfolio />
      <Features />
      <Slider />
      <Blog />
      <GetStarted />
      <InquiryForm />
      </Fragment>
    )
}
    

export default HomePage;