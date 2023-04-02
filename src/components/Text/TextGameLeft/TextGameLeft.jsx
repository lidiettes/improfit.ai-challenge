import React from 'react'

const TextGameLeft = () => {
    return (
        <>
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
        </>
    )
}

export default TextGameLeft