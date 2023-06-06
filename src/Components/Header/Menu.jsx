import React from 'react'
import menu from './Menu.module.css'
const Menu = () => {
  return (
    <>
    <div className={menu.menu}>
    <li>Главная</li>
    <li>О нас</li>
    <li>Контакты</li>
    </div>
    </>
  )
}

export default Menu