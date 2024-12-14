import React from 'react';
import classes from './Portfolio.module.scss';
import Link from 'next/link';
import { Button } from '@mui/material';
import PortfolioCard from '../PortfolioCard';
import Portfolio1 from '../../public/portfolio1.png';
import Portfolio2 from '../../public/portfolio2.png';

const Portfolio = () => {
  return (
    <section className={classes.Portfolio}>
      <div className={classes.Portfolio__details}>
        {/* <h2>Portfolio</h2> */}
        {/* <p>
          Check out some of <br /> my projects
        </p> */}
        <Link href="/portfolio">
          <Button>Some Projects</Button>
        </Link>
      </div>
      <div className={classes.Portfolio__items}>
        <PortfolioCard
          img={Portfolio1}
          name="Worklete"
          job="React-Native Developer"
        />
        <PortfolioCard
          img={Portfolio2}
          name="Rolfson Oil"
          job="React-Native Developer"
        />
      </div>
    </section>
  );
};
export default Portfolio;
