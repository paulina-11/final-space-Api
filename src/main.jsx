import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.scss'
import { CharacterProvider } from './Context/CharactersContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CharacterProvider>
      <App />
    </CharacterProvider>
  </React.StrictMode>
)
