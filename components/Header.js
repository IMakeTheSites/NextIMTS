import React from 'react';
import classes from './Header.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image';

const Header = () => {
    return (
        <div className={classes.Header}>
            <h1 className={classes.Header__heading}>Independent<br /> <span>consultants</span></h1>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}
            >
                <div className={classes.Carousel}>
                    <div className={classes.myCarousel}>
                        <Image src="/background.jpg" alt="Two people working at a desk at home" width={1400} height={706}/>
                    </div>
                </div>

                <div>
                    <div className={classes.myCarousel}>
                        <Image src="/background2.jpg" alt="Computer on the Couch" width={6016} height={4016}/>
                    </div>
                </div>

                <div>
                    <div className={classes.myCarousel}>
                        <Image src="/background3.jpg" alt="Coffee and stuff next to a MacBook" width={4827} height={3218} />
                    </div>
                </div>
            </Carousel>
            <div className={classes.Header__callUs}>
                <p className={classes.Header__callUs__text}>
                    Contact Us Today for FREE Consultations
                </p>
                <button className={classes.Header__callUs__button}>Call +1 4356 2666</button>
            </div>

        </div>
    )
}

export default Header
