import Link from 'next/link';
import classes from './Layout.module.css'
import MainNavigation from './MainNavigation';
import UpperSocial from './UpperSocial';

function Layout(props) {
    return (
        <div>
            <UpperSocial />
            <MainNavigation />
            <main className={classes.main}>{props.children}</main>
        </div>
    )
}

export default Layout;