import React from 'react'
import FooterImg from '../../assets/Group61.svg'
import List from './FuterList.module.css'
const FooterLogo = () => {
  return (
    <ul className={List.list} >  
        <li><img src={FooterImg}></img></li>
        <li>Партнерам</li>
        <li>Разработчикам</li>
        <li>Вакансии</li>
    </ul>
  )
}

export default FooterLogo