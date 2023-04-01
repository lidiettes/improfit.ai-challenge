import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {

    const stylesGreen = {
        backgroundColor: '#60F2E2',
        color: 'black',
    };

    const stylesBlue = {
        backgroundColor: '#00bfff',
        color: 'white',
    };

    const buttonStyle = props.color === 'green' ? stylesGreen : stylesBlue;

    return (
        <button 
        className={styles.letsChatButton} 
        style={buttonStyle}
        onClick={props.onClick}
        >{props.buttonText}</button>
    )
}

export default Button