import React from "react";
import classes from './Portfolio.module.scss';
import Image from "next/image";
import PortfolioItem from './PortfolioItem/PortfolioItem';
import Link from "next/link";

const Portfolio = () => {
    return (
        <section className={classes.Portfolio}>
            <div className={classes.Portfolio__details}>
                <h2>Portfolio</h2>
                <p>Check out some of <br /> my projects</p>
                <button onClick={<Link href="/work"></Link>}>View More</button>
            </div>
            <div className={classes.Portfolio__items}>

            </div>
        </section>
    )
}
export default Portfolio;