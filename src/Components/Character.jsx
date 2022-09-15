import { useState } from 'react'
import { useCharacterContext } from '../Context/CharactersContext'
import Modal from './Modal'

const Character = () => {
  const { characters, setSelectedCharacter } = useCharacterContext()
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const handleCharacter = () => {
    setModal(true)
    setTimeout(() => {
      setAnimarModal(true)
    }, 200)
  }
  return (
    <div className={modal && 'fijar'}>
      <div className='character'>
        <h2 className='character__titulo'>Personajes</h2>
        <div className='character__grid'>
          {
        characters.map((character) =>
          <article
            key={character.id}
            onClick={() => { setSelectedCharacter(character) }}
            className='character__option'
          >
            <div onClick={handleCharacter}>
              <img src={character.img_url} alt={character.name} />
              <h3 className='character__name'>{character.name}</h3>
            </div>

          </article>
        )
    }
        </div>
        {modal && <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
                  />}
      </div>
    </div>

  )
}

export default Character
