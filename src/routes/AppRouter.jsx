import { Route, Routes } from "react-router-dom"
import DicePage from "../pages/DicePage"
import RandomPage from "../pages/RandomPage"
import StartPage from "../pages/StartPage"


const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/random" element={<RandomPage />} />
                <Route path="/dice" element={<DicePage />} />

            </Routes>

        </>
    )
}

export default AppRouter