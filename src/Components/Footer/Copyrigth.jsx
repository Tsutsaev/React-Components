import React from 'react'
import FooterLogo from './FooterLogo'
import FooterMenu from './FooterMenu'
import Copy from './Copy.module.css'
const Copyrigth = () => {
  return (
    <div className={Copy.flex}>
<FooterLogo/>
<FooterMenu/>
    </div>
  )
}

export default Copyrigth