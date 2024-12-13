import React from 'react';
import classes from './PortfolioItem.module.scss';
import Image from 'next/image';

const PortfolioItem = (props) => {
  return (
    <div className={classes.Item}>
      <Image src={props.img} alt="Portfolio" />
      {/* <img src={props.img} alt="Portfolio" /> */}
      <div className={classes.Item__details}>
        <h3>{props.name}</h3>
        <p>{props.job}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
