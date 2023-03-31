import React, { useState } from 'react'
import dice1 from "../../assets/images/Dice1.png"
import dice2 from "../../assets/images/Dice2.png"
import dice3 from "../../assets/images/Dice3.png"
import dice4 from "../../assets/images/Dice4.png"
import dice5 from "../../assets/images/Dice5.png"
import dice6 from "../../assets/images/Dice6.png"
import styles from "./Game.module.css"


const Game = () => {

    const diceImages = [
        dice1,
        dice2,
        dice3,
        dice4,
        dice5,
        dice6
    ]

    const [image, setNewImage] = useState(diceImages[0])
    const [image2, setNewImage2] = useState(diceImages[1])

    const rollDice = ()=>{
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        const randomNumber2 = Math.floor(Math.random() * 6) + 1;
        setNewImage(diceImages[randomNumber-1])
        setNewImage2(diceImages[randomNumber2-1])
    }

    return (
        <>
            <div>Game</div>
            <div className={styles.container}>
                <img className={styles.square} src={image}/>
                <div style={{ width: '5px', display: 'inline-block' }}></div>
                <img className={styles.square} src={image2} />
                <button onClick={rollDice}>Play</button>
            </div>
        </>
    )
}

export default Game