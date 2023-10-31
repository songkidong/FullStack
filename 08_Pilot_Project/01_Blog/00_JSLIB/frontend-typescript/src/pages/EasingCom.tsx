// EasingCom.tsx : rfce
import React, { useEffect } from 'react'
// 내가 만든 css
import "../assets/css/EasingCom.css"
import initMain from '../assets/js/initMain'

function EasingCom() {

    useEffect(() => {
        initMain();
    },[])
    
  return (
    <div>
        <div id= "boxing">
            <div id= "box"></div>
        </div>
    </div>
  )
}

export default EasingCom