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
    const buttonClass = props.small ? styles.smallButton : '';

    return (
        <button 
        className={`${styles.letsChatButton} ${buttonClass}`} 
        style={buttonStyle}
        onClick={props.onClick}
        >{props.buttonText}</button>
    )
}

export default Button