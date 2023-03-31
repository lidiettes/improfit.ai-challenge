import React from 'react'
import { Link } from 'react-router-dom'
import ButtonStart from '../components/ButtonStart/ButtonStart'

const StartPage = () => {

    return (
        <>
            <Link to="/random">
                <ButtonStart />
            </Link>
        </>
    )
}

export default StartPage