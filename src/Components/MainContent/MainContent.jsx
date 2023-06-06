import React from 'react'
import Number from './Number'
import MainBg from './MainBg.module.css'
import Buttons from './Buttons'

const MainContent = () => {
  return (
    <div className={MainBg.mainBg}>
        <Number/>
        <Buttons/>
    </div>
  )
}

export default MainContent