import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Navbar from '../Navbar/Navbar';
import styles from "./Header.module.css";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.logoContainer}>
                    <Link to="/">
                        <img src="https://uploads-ssl.webflow.com/63230b1c0368dee8bb6d4bde/6334a70ce20e008158febfad_improfit-logo.png" alt="Logo" className="logo" />
                    </Link>
                </div>
                <Navbar />

                <li className={styles.navbarItem}>
                    <ScrollLink
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <Button
                            buttonText="Let's chat"
                            color="blue"
                        />
                    </ScrollLink>
                </li>

                {/* <Button buttonText="Let's chat" color="blue"/> */}
                {/* <button className={styles.hamburgerButton}>
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
            </button> */}
            </div>
        </header>
    );
};

export default Header;