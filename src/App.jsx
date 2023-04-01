import './App.css'
import Contact from './components/Contact/Contact'
import Game from './components/Game/Game'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import AppRouter from './routes/AppRouter'

function App() {


  return (
    <>

      
      <Intro />
      <Game />
      <Contact />
      <AppRouter />
    </>
  )
}

export default App
