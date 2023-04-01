import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import styles from "./Header.module.css";



const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src="https://uploads-ssl.webflow.com/63230b1c0368dee8bb6d4bde/6334a70ce20e008158febfad_improfit-logo.png" alt="Logo" className="logo" />
            </div>
            <nav className={styles.navbar}>
                <ul className={styles.navbarUl}>
                    <Link><li className={styles.navbarItem}><a to="/">Home</a></li></Link>
                    <Link><li className={styles.navbarItem}><a to="playwithus">Play with us</a></li></Link>
                    <Link><li className={styles.navbarItem}><a href="#">About</a></li></Link>
                </ul>
            </nav>
            <Button buttonText="Let's chat" color="blue"/>
            <button className={styles.hamburgerButton}>
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
            </button>
        </header>
    );
};

export default Header;