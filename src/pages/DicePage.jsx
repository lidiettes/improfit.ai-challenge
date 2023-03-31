import React, { useState } from 'react'

const DicePage = () => {
    const [rollResults, setRollResults] = useState(new Array(numberOfDice).fill(0));
    const [finishedRolls, setFinishedRolls] = useState(false);

    const rollDice = () => {
        const newRollResults = rollResults.map(() => Math.floor(Math.random() * 6) +
            1);
        setRollResults(newRollResults);
        setFinishedRolls(true);
    }
    const resetDice = () => {
        setRollResults(new Array(numberOfDice).fill(0));
        setFinishedRolls(false);
    }
    const toggleDice = (index) => {
        const newRollResults = [...rollResults];
        newRollResults[index] = newRollResults[index] === 0 ? 1 : 0;
        setRollResults(newRollResults);
    }
    const dice = rollResults.map((result, index) => (
        <Die
            key={index}
            index={index}
            result={result}
            finishedRolls={finishedRolls}
            toggleDice={toggleDice}
        />
    ));



    return (
        <>
            <div className="dice-container"></div>
            <div className="dice-container">
                <div className="dice-row">
                    {dice}

                </div>
            </div>
        
        </>

    )
}

export default DicePage