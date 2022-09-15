import { useCharacterContext } from '../Context/CharactersContext'
import CerrarBtn from '../Assets/img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal }) => {
  const { selectedCharacter } = useCharacterContext()
  const ocultarModal = () => {
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 300)
  }
  return (
    <div className='modal'>
      <div className='modal__cerrar'>
        <img
          className='modal__img'
          src={CerrarBtn}
          alt='close'
          onClick={ocultarModal}
        />
      </div>

      <div className={`modal__descripcion ${animarModal ? 'modal__animar' : 'modal__close'}`}>
        {
            selectedCharacter.name &&
              <div className='modal__character'>
                <img src={selectedCharacter.img_url} alt={selectedCharacter.name} />
                <div className='modal__caracter'>
                  <h2 className='modal__texto'>{selectedCharacter.name}</h2>
                  <p className='modal__texto'>Especie: {selectedCharacter.species}</p>
                  <p className='modal__texto'>Genero: {selectedCharacter.gender}</p>
                  <p className='modal__texto'>Origen: {selectedCharacter.origin}</p>
                </div>
              </div>
        }
      </div>

    </div>
  )
}

export default Modal
