import React from 'react'
import styles from './Navbar.module.css'
import { Link, animateScroll as scroll } from 'react-scroll';
import Button from '../Button/Button';

const Navbar = () => {
    return (

        <nav className={styles.navbar}>
      <ul className={styles.navbarUl}>
        <li className={styles.navbarItem}>
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link
            activeClass="active"
            to="playwithus"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Play with us
          </Link>
        </li>

      

        







        </ul>
        </nav>
























    )
}

export default Navbar