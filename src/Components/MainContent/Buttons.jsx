import React from 'react'
import ButtonsStyle from './Buttons.module.css'
const Buttons = () => {
  return (
    <ul className={ButtonsStyle.buttons}>
        <li className={ButtonsStyle.button_1}>Увеличить</li>
        <li className={ButtonsStyle.button_2}>Уменьшить</li>
        <li className={ButtonsStyle.button_3}>Сбросить</li>
    </ul>
  )
}

export default Buttons