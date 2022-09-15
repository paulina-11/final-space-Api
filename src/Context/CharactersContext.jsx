import { createContext, useEffect, useState, useContext } from 'react'
import axios from 'axios'

export const CharactersContext = createContext()
const baseURL = 'https://finalspaceapi.com/api/v0/character'

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([])
  const [selectedCharacter, setSelectedCharacter] = useState({})
  useEffect(() => {
    axios.get(baseURL).then((response) =>
      setCharacters(response.data)
    )
  }, [])

  const values = {
    characters,
    setCharacters,
    selectedCharacter,
    setSelectedCharacter
  }
  return (
    <CharactersContext.Provider value={values}>
      {children}
    </CharactersContext.Provider>
  )
}

export const useCharacterContext = () => {
  const context = useContext(CharactersContext)
  return context
}
