import React from 'react'
import './Header.css';
import Logo from './Images/King Robert Logo.png'

function Header() {
  return (
    <div>
    <header className='header__style sticky'>
      <nav className='flex flex-row'>
      <div className='header__logo mx-auto'>
      <img src={Logo} alt='King Robert Logo' className='w-35 h-20 ml-10 cursor-pointer' />
      </div>
      <div className='menu__list mt-6 mx-auto flex'>
      <ul className='flex flex-row text-lg'>
      <li><a href='/'>About Me</a></li>
      <li><a href='/'>Portfolio</a></li>
      <li><a href='/'>Client</a></li>
      <li><a href='/'>Contact Me</a></li>
      </ul>
      <button className='bg-neutral-900 text-white btn__sign ml-4'>Sign In</button>
      </div>
        
      </nav>
    </header>
    </div>
  )
}

export default Header