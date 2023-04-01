import React from 'react'
import { Link } from 'react-router-dom'
import ButtonStart from '../components/Button/Button'

const HomePage = () => {

    return (
        <>
            <Link to="/homepage">
                <ButtonStart />
            </Link>
        </>
    )
}

export default HomePage