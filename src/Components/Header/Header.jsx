import React from 'react'
import Logo from './logo'
import Menu from './menu'
import header from './Header.module.css'

const Header = () => {
  return (
    <ul className={header.header}>
        <Logo/>
        <Menu/>
    </ul>
  )
}

export default Header