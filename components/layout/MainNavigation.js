import React from 'react';
import classes from './MainNavigation.module.scss';
import Link from 'next/link';
import Image from 'next/image';

function MainNavigation() {
    return (
         <nav className={classes.LowerNav}>
             <div className={classes.LowerNav__logo}>
                 <Link href='/'>
                    <a> <Image
                     src="IMTSlogo.png"
                     alt="I Make the Sites Logo"
                     width={99}
                     height={111} /></a>
                 </Link>
             </div>
         </nav>
    )
}

export default MainNavigation