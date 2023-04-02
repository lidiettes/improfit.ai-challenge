import useDiceGame from '../../Utils/hooks/useDiceGame';
import Button from '../Button/Button';
import TextGameLeft from '../Text/TextGameLeft/TextGameLeft';
import styles from "./Game.module.css";

const Game = () => {
    const {
        image,
        image2,
        targetScore,
        highScore,
        rollsLeft,
        resultMessage,
        rollDice,
        setNewTargetScore,
     
    } = useDiceGame();


    return (
        <>
            <div className={styles.containerGame} id="playwithus">
                <div className={styles.containerLeft}>
                    <TextGameLeft />
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
                </div>
            </div>

        </>
    )
}

export default Game