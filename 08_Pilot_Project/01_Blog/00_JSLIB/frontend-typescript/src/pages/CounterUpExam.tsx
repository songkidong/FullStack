// CounterUpExam.tsx : rfce
import React, { useEffect } from "react";
import initMain from "../assets/js/initMain";

function CounterUpExam() {

    // 화면이 뜰때 실행 이벤트
    useEffect(()=>{
        // 여기
        initMain();
    },[])

  return (
    // 여기
    <div>
      <span className="counter">1,234,567.00</span>
      <br />
      <span>$</span>
      <br />
      <span className="counter">1.99</span>
      <br />
      <span className="counter">12345</span>
      <br />
    </div>
  );
}

export default CounterUpExam;
