// TypedCom.tsx : rfce
import React, { useEffect } from 'react'
import initMain from '../assets/js/initMain';

function TypedCom() {

    useEffect(()=>{
        // 여기
        initMain();
    },[]);

  return (
    <div>
        <span id="typed1"></span>
    </div>
  )
}

export default TypedCom