import React from 'react'

const TextGameLeft = () => {
    return (
        <>
            <h2>Push your brand towards new challenges, for example, this dice game.</h2>
            <p> This game’s rules are very straightforward.
                The game mechanics works according to this flow: </p>
            <ol>
                <li>The game session start</li>
                <li>A random number is generated based on the number of dices in the game. This is the score that you have to beat. We will call this targetScore.</li>
                <li>You can rolls the dices 3 times and gets a rollResult.</li>
                <li>If rollResult is higher than high score for this session, set highScore for this session = rollResult.</li>
                <li>You win if highScore is higher than targetScore. </li>
                <li>Are you ready?</li>
            </ol>
        </>
    )
}

export default TextGameLeft