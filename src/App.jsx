import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Character from './Components/Character'
import Nav from './Components/Nav'
import Home from './Pages/Home'

function App () {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='personajes' element={<Character />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
