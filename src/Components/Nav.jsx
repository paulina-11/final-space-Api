import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/img/logo.png'

const Nav = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <Link to='/'><img src={Logo} alt='logo' /></Link>
      </div>
      <ul className='navbar__ligas'>
        <li className='navbar__liga'><Link to='/'>Home</Link></li>
        <li className='navbar__liga'><Link to='personajes'>Personajes</Link></li>
      </ul>

    </nav>
  )
}

export default Nav
