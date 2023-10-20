// BasicExam.tsx : 자식(연습)
// rfce
import React, { useState } from "react";

function BasicExam() {
  // TODO: 변수 정의
  const [message, setMessage] = useState<string>(
    "안녕하세요 그린컴퓨터아카데미입니다."
  );
  const [message2, setMessage2] = useState<string>("아래는 곱셈 샘플입니다.");
  const [message3, setMessage3] = useState<string>("곱셈");
  const [num, setNum] = useState<number>(2);
  const [num2, setNum2] = useState<number>(3);
  const [sumVal, setSumVal] = useState<number>(num * num2);

  return (
    <div>
      {/* 아래 처럼 바인딩 변수를 사용해서 화면 출력을 하되 
          타입스크립트 코드를 적용하여 출력하세요 
        단, 문자는 string , 숫자는 number 를 사용해서 코딩하세요
        */}
      {/* 결과 : 
                안녕하세요 그린컴퓨터아카데미입니다.
                아래는 곱셈 샘플입니다.
                곱셈
                2 * 3 = 6
                
         */}
      {message}
      <br />
      {message2}
      <br />
      {message3}
      <br />
      {num + " * " + num2 + " = " + sumVal}
    </div>
  );
}

export default BasicExam;
