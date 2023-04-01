import './App.css'
import Game from './components/Game/Game'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import AppRouter from './routes/AppRouter'

function App() {


  return (
    <>

      <Header />
      <Intro />
      <Game />
      <AppRouter />
    </>
  )
}

export default App
