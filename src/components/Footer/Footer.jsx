import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <>
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <img src="https://uploads-ssl.webflow.com/63230b1c0368dee8bb6d4bde/6334a70ce20e008158febfad_improfit-logo.png" alt="Improfit logo" />
            </div>
            <div className={styles.contact}>
                <h3>CONTACT US</h3>
                <p className={styles.footerP}>info@improfit.ai</p>
                <div className={styles.social}>
                    <Link to="https://www.linkedin.com/in/lidiafrias/"><img src="https://blog.waalaxy.com/wp-content/uploads/2021/01/LinkedIn-Symbole.png" alt="LinkedIn logo" /></Link>
                    <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" alt="Twitter logo" />
                </div>
            </div>
            <div className={styles.resources}>
                <h3>RESOURCES</h3>
                <p className={styles.footerP}>Our Blog (coming soon)</p>
            </div>
            <div className={styles.about}>
                <h3>ABOUT</h3>
                <p className={styles.footerP}>Terms &amp; Conditions</p>
                <p className={styles.footerP}>Cookies</p>
                <p className={styles.footerP}>Privacy</p>
                <p className={styles.footerP}>Legal Notice</p>
            </div>
            <p className={styles.signP} >Lidia Frías © 2023</p>
           
            
           
        </footer>
      
        
    
        </>
    );
};

export default Footer;
