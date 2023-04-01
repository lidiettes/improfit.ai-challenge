import React, { useState } from 'react'
import Button from '../Button/Button';

import styles from "./Contact.module.css";

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [checked, setChecked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    };

    return (
        <div className={styles.containerContact} id="contact">

            <div className={styles.container}>
                <h2 className={styles.formH2}>Get in touch with us</h2>
                <h3 className={styles.formH3}>We will answer in a flash</h3>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.check}>
                        <input
                            className={styles.markCheck}
                            type="checkbox"
                            id="dataConditions"
                            checked={checked}
                            onChange={(e) => setChecked(e.target.checked)}
                            required
                        />
                        <label className={styles.em} htmlFor="dataConditions">
                            Check here to indicate that you have read and agree to our Data
                            Conditions
                        </label>
                    </div>
                    
                    <div className={styles.formGroup}>
                        <Button buttonText="Send Message" color="blue" type="submit" />

                        {/* <button type="submit">Submit</button> */}
                    </div>
                </form>
                <p>
                    Wellfit Tec, S.L. (Improfit AI) informs you that the personal data you
                    provide by filling out this form will be processed by Wellfit Tec, S.L.
                    (Improfit AI) as responsible for this website.
                </p>
                <p>
                    The purpose of the collection and processing of personal data we request
                    is to manage the request you make in this contact form. Legitimation:
                    Consent of the interested party.
                </p>
                <p>
                    As a data subject, we inform you that the data you provide will be
                    processed by Webflow. See Webflow data management information.
                </p>
                <p>
                    Failure to enter the personal data that appear on the form as mandatory
                    will result in us not being able to process your request.
                </p>






            </div>
        </div>
    )
}

export default Contact