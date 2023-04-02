import { useState } from 'react';
import dice1 from "../../assets/images/Dice1.png";
import dice2 from "../../assets/images/Dice2.png";
import dice3 from "../../assets/images/Dice3.png";
import dice4 from "../../assets/images/Dice4.png";
import dice5 from "../../assets/images/Dice5.png";
import dice6 from "../../assets/images/Dice6.png";

const useDiceGame = () => {
    const diceImages = [dice1,dice2, dice3, dice4, dice5, dice6];
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

    let resultMessage;
    if (targetScore > 0 && rollsLeft === 0) {
        if (highScore >= targetScore) {
            resultMessage = "Congratulations, you win!";
        } else {
            resultMessage = "Sorry, you lose!";
        }
    }

    return {
        image,
        image2,
        targetScore,
        highScore,
        rollsLeft,
        resultMessage,
        rollDice,
        setNewTargetScore,
      
    };
};

export default useDiceGame;
