import Sinopsis from '../Components/Sinopsis'
import Portada from '../Assets/img/portada.gif'

const Home = () => {
  return (
    <div className='home'>
      <img className='home__portada' src={Portada} alt='portada' />
      <h1 className='home__title'>Final Space</h1>
      {/* rutas externas */}
      {/* <a href='introduction'>intrduction</a> */}
      {/* rutas internas */}
      <Sinopsis />

    </div>
  )
}

export default Home
