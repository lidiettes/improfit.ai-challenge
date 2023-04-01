import React, { useState } from 'react';
import dice1 from "../../assets/images/Dice1.png";
import dice2 from "../../assets/images/Dice2.png";
import dice3 from "../../assets/images/Dice3.png";
import dice4 from "../../assets/images/Dice4.png";
import dice5 from "../../assets/images/Dice5.png";
import dice6 from "../../assets/images/Dice6.png";
import styles from "./Game.module.css";

const Game = () => {
    const diceImages = [
        dice1,
        dice2,
        dice3,
        dice4,
        dice5,
        dice6
    ];

    const [image, setNewImage] = useState(dice1);
    const [image2, setNewImage2] = useState(dice1);
    const [targetScore, setTargetScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [rollsLeft, setRollsLeft] = useState(3);

    const rollDice = () => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        const randomNumber2 = Math.floor(Math.random() * 6) + 1;
        const rollScore = randomNumber + randomNumber2;

        if (rollScore > highScore) {
            setHighScore(rollScore);
        }

        setNewImage(diceImages[randomNumber - 1]);
        setNewImage2(diceImages[randomNumber2 - 1]);

        setRollsLeft(rollsLeft - 1);
    };

    const setNewTargetScore = () => {
        setTargetScore(Math.floor(Math.random() * 35) + 1);
        setRollsLeft(3);
    };

    const playGame = () => {
        setHighScore(0);

        setRollsLeft(3);
        rollDice();
    };

    let resultMessage;
    if (targetScore > 0 && rollsLeft === 0) {
        if (highScore >= targetScore) {
            resultMessage = "You win!";
        } else {
            resultMessage = "You lose!";
        }
    }

    return (
        <>
            <div>Game</div>
            <div className={styles.container}>
                <div className={styles.containerImages}>
                    <img className={styles.square} src={image} alt="" />
                    <img className={styles.square} src={image2} alt="" />
                </div>
                <div style={{ width: '5px', display: 'inline-block' }}></div>
                {rollsLeft > 0 && (
                    <button style={{ alignSelf: 'center' }} onClick={rollDice}>
                        Roll the dice ({rollsLeft} left)
                    </button>
                )}
                {rollsLeft === 0 && (
                    <button style={{ alignSelf: 'center' }} onClick={playGame}>
                        Play again
                    </button>
                )}
                <button
                    style={{ alignSelf: 'center', marginLeft: '20px' }}
                    onClick={setNewTargetScore}
                    disabled={rollsLeft !== 3}
                >
                    PLAY
                </button>
                <div style={{ marginTop: '20px' }}>Target Score: {targetScore}</div>
                <div>High Score: {highScore}</div>
                {resultMessage && <div style={{ marginTop: '20px' }}>{resultMessage}</div>}

            </div>
        </>
    )
}

export default Game