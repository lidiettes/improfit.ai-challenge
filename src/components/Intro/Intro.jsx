import React from 'react'
import { Link } from 'react-scroll';


import Button from '../Button/Button';

import Header from '../Header/Header';
import styles from "./Intro.module.css";

const Intro = () => {
    return (
        <div className={styles.containerIntro} id="intro">

            <Header />
            <div className={styles.containerSection}>
                <section>
                    <h1 className={styles.introH1}>Evaluate and quantify physical AI, and now with this dice game, mental as well. </h1>
                    <h3 className={styles.introH3}>We are a B2B2C platform that uses computer vision and artificial intelligence to evaluate and quantify physical exercises in real-time, with a musculoskeletal approach. Our goal is to improve people's lives through training and rehabilitation. And what's more, we like to have fun with dice games!</h3>

                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <Button
                            buttonText="Let's chat"
                            color="green"
                        />
                    </Link>

                </section>
                <section>
                    <img className={styles.imgIntro} src="https://uploads-ssl.webflow.com/63230b1c0368dee8bb6d4bde/63230feda143765ce5e4d7e8_improfit%20ai%20tracking%20software%20-%20app.png"></img>
                </section>
            </div>

        </div>
    )
}

export default Intro