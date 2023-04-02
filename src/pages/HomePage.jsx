import React from 'react'
import { Link } from 'react-router-dom'
import ButtonStart from '../components/Button/Button'
import Contact from '../components/Contact/Contact'
import Game from '../components/Game/Game'
import Intro from '../components/Intro/Intro'

const HomePage = () => {

    return (
        <>
            <Intro />
            <Game />
            <Contact />
        </>
    )
}

export default HomePage