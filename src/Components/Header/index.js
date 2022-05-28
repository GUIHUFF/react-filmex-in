import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link className='logo' to='/'>Filmex-in</Link>
      <div>
        <Link className='favoritos' to='/favoritos'>Meus Filmes</Link>
      </div>
    </header>
  )
}

export default Header;