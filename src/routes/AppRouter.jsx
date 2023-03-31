import { Route, Router } from "react-router-dom"
import StartPage from "../pages/StartPage"


const AppRouter = () => {
    return (
        <>
            <Router>
                <Route path="/" element={<StartPage /> }/>

            </Router>

   
       
            
      
        </>
    )
}

export default AppRouter