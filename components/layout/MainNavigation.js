import React, {useState} from 'react';
import classes from './MainNavigation.module.scss';
import Link from 'next/link';
import Image from 'next/image';

function MainNavigation() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
         <nav className={classes.MainNavigation}>
             <div className={classes.MainNavigation__logo}>
                 <Link href='/'>
                    <a> <Image
                     src="/IMTSlogo.png"
                     alt="I Make the Sites Logo"
                     width={99}
                     height={111} /></a>
                 </Link>
             </div>
             <ul className={isNavOpen ? `${classes.MainNavigation__list} ${classes.open}` : classes.MainNavigation__list}>
                 <li className={classes.MainNavigation__list__item} onClick={e => setIsNavOpen(false)}><Link href='/'>Home</Link></li>
                 <li className={classes.MainNavigation__list__item} onClick={e => setIsNavOpen(false)}><Link href='/about'>About</Link></li>
                 <li className={classes.MainNavigation__list__item} onClick={e => setIsNavOpen(false)}><Link href='/work'>Work</Link></li>
                 <li className={classes.MainNavigation__list__item} onClick={e => setIsNavOpen(false)}><Link href='/blog'>Blog</Link></li>
                 <li className={classes.MainNavigation__list__item} onClick={e => setIsNavOpen(false)}><Link href='/'>Home</Link></li>
             </ul>
         </nav>
    )
}

export default MainNavigation