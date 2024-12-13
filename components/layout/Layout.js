import Link from 'next/link';
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
import UpperSocial from './UpperSocial';
import Footer from './Footer';

function Layout(props) {
  return (
    <div>
      {/* <UpperSocial /> */}
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
