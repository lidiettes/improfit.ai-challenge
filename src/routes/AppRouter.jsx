import { Route, Routes } from "react-router-dom"
import DicePage from "../pages/PlayWithUsPage"
import PlayWithUsPage from "../pages/PlayWithUsPage"
import HomePage from "../pages/HomePage"


const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
         
            

            </Routes>

        </>
    )
}

export default AppRouter