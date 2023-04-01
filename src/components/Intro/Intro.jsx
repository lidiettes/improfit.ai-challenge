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
                    <h3 className={styles.introH3}>Aqui va un texto diciendo que improfit esta muy bien, pero mejor con mi jueguecito
                        Aqui va un texto diciendo que improfit esta muy bien, pero mejor con mi jueguecito
                        Aqui va un texto diciendo que improfit esta muy bien, pero mejor con mi jueguecito
                        Aqui va un texto diciendo que improfit esta muy bien, pero mejor con mi jueguecito
                        Aqui va un texto diciendo que improfit esta muy bien, pero mejor con mi jueguecito</h3>

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