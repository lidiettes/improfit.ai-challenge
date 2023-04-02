import React, { useState } from 'react';
import dice1 from "../../assets/images/Dice1.png";
import dice2 from "../../assets/images/Dice2.png";
import dice3 from "../../assets/images/Dice3.png";
import dice4 from "../../assets/images/Dice4.png";
import dice5 from "../../assets/images/Dice5.png";
import dice6 from "../../assets/images/Dice6.png";
import Button from '../Button/Button';
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
        setNewTargetScore();
        rollDice();
    };

    let resultMessage;
    if (targetScore > 0 && rollsLeft === 0) {
        if (highScore >= targetScore) {
            resultMessage = "Congratulations, you win!";
        } else {
            resultMessage = "Sorry, you lose!" ;
        }
    }

    return (
        <>

            <div className={styles.containerGame} id="playwithus">
                <div className={styles.containerLeft}>

                    <h2>Push your brand towards new challenges, for example, this dice game.</h2>
                    <p> This game’s rules are very straightforward:
                        There are a number of configurable dices in the game, called numberOfDices.
                        The game mechanics works according to this flow: </p>
                    <ol>
                        <li>The game session start</li>
                        <li>A random number is generated based on the number of dices in the game. This is the score that the player has to beat. We will call this targetScore.</li>
                        <li>The player rolls the dices numberOfRolls times and gets a rollResult.</li>
                        <li>If rollResult is higher than high score for this session, set highScore for this session = rollResult.</li>
                        <li>Go back to step 3 until you rolled the dices numberOfRolls times.</li>
                        <li>The player wins if highScore is higher than targetScore.</li>
                    </ol>
                    <div className={styles.containerPlay}>
                        <Button buttonText="Play" color="blue" onClick={setNewTargetScore}
                            disabled={rollsLeft !== 3} />
                        
                    </div>

                </div>

                <div className={styles.containerRight}>

                    {resultMessage && <div className={styles.resultMessage} >{resultMessage}</div>}
                    {rollsLeft === 0 && (
                        <h3>Want to try it again?</h3>
                    )}


                    <h2>High Score: {highScore}</h2>

                    <div className={styles.containerImages}>
                        <img className={styles.square} src={image} alt="" />
                        <img className={styles.square} src={image2} alt="" />
                    </div>
                    <div className={styles.containerButtons}></div>
                    {rollsLeft > 0 && (
                        <Button
                            onClick={rollDice}
                            buttonText={`Roll the dice (${rollsLeft} left)`}
                            color="green"

                        />
                    )}
                    <div className={styles.targetDiv}>Target Score: {targetScore}</div>
                    {/* <button
                    style={{ alignSelf: 'center', marginLeft: '20px' }}
                    onClick={setNewTargetScore}
                    disabled={rollsLeft !== 3}
                >
                    PLAY
                </button> */}

                </div>
            </div>

        </>
    )
}

export default Game