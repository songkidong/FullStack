// C_Exam.js : 자식 컴포넌트
import { useState } from "react";
// rfce
// TODO: 연습문제
// TODO : 클릭시 아래 결과대로 코딩하세요
// TODO : 최초화면 : "안녕하세요"
// TODO : 결과 : "안녕"

function C_Exam() {
  // TODO: 변수 정의 : 여기
  // TODO: 1) 바인딩 변수 정의
  // 사용법 : let [변수명, 수정함수] = useState("초기값")
  let [element, setElement] = useState("안녕하세요");

  // TODO: 2) myClick() 화살표 함수 : 안녕 으로 수정
  // nfn
  const myClick = () => {
    // 수정 함수 : "안녕"
    setElement("안녕");
  };

  return (
    <div>
      {element}
      <br />
      <button onClick={myClick}>문자열변경</button>
    </div>
  );
}

export default C_Exam;
