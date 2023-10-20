// B_Accommodate_Exam.js : 자식(연습)
// rfce
// TODO: 연습문제 : 아래 노란버튼을 클릭하면 파란버튼이 보이게 하세요
// 힌트 : &&(논리연산자)
//       변수 && 실행문(태그)  ( 변수가 참이면 실행문(태그)이 보이고 , 아니면 실행문(태그)이 안보임)
import React, { useState } from "react";

function B_Accommodate_Exam() {
  // TODO: 변수 정의
  // 사용법 : let [변수명, set변수명] = useState(초기값);
  let [isButton, setIsButton] = useState(false); // false

  // TODO: 함수 정의
  // nfn : 클릭 함수
  const blueClick = () => {
    // isButton : false -> true : setIsButton(변경될값);
    setIsButton(true);
  };

  return (
    <div>
      <button onClick={blueClick} className="btn btn-warning">
        노란 버튼
      </button>
      <br />
      {isButton && <button className="btn btn-primary">파란 버튼</button>}
    </div>
  );
}

export default B_Accommodate_Exam;
