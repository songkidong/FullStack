// TypedComExam.tsx : rfce
import React, { useEffect } from 'react'
import initMain from '../assets/js/initMain'

function TypedComExam() {

    useEffect(()=>{
        // 여기
        initMain();
    },[])

  return (
    <div>
        <span id="typedExam"></span>
    </div>
  )
}

export default TypedComExam