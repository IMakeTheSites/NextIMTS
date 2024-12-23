import React from 'react';
import classes from './Header.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { Box, Button } from '@mui/material';
import Link from 'next/link';

function Header() {
  return (
    <div className={classes.Header}>
      <h1 className={classes.Header__heading}>
        Mark Makes The Sites
        <br /> <span>So You Don&apos;t Have To!</span>
      </h1>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
        dynamicHeight
      >
        <div className={classes.Carousel}>
          <div className={classes.myCarousel}>
            <Image
              src="/background.jpg"
              alt="Guy working at a desk at home"
              width={1400}
              height={706}
            />
          </div>
        </div>

        <div>
          <div className={classes.myCarousel}>
            <Image
              src="/background2.jpg"
              alt="Computer on the Couch"
              width={6016}
              height={4016}
            />
          </div>
        </div>

        <div>
          <div className={classes.myCarousel}>
            <Image
              src="/background3.jpg"
              alt="Coffee and stuff next to a MacBook"
              width={4827}
              height={3218}
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
export default Header;
