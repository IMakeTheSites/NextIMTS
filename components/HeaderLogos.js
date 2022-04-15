import React from 'react';
import classes from './HeaderLogos.module.scss';
import Image from 'next/image';

const HeaderLogos = () => {
 return (
        <div className={classes.HeaderLogos}>
            <ul className={classes.HeaderLogos__list}>
                <div className={classes.HeaderLogos__logo1}>
                    <Image src="/logo1.png" alt="worklete" width={293} height={43} />
                </div>
                <div className={classes.HeaderLogos__logo2}>
                    <Image src="/logo2.png" alt="lob" width={80} height={30}/>
                </div>
                <div className={classes.HeaderLogos__logo3}>
                    <Image src="/logo3.png" alt="Rolfson Oil" width={215} height={43} />
                </div>
                <div className={classes.HeaderLogos__logo4}>
                    <Image src="/logo4.png" alt="Archetape" width={193} height={44} />
                </div>
            </ul>
        </div>
    )
}

export default HeaderLogos