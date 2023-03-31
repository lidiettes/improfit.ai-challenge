import React from 'react'
import { Link } from 'react-router-dom';
import ButtonNext from '../components/ButtonNext/ButtonNext';

const RandomPage = () => {

    const [targetScore, setTargetScore] = useState(0);
    const randomNumber = Math.floor(Math.random() * 12) + 1;

    return (
        <>
            <div>{randomNumber}</div>



            <Link to="/dice">
                <ButtonNext />
            </Link>
        </>
    )
}

export default RandomPage