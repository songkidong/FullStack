// C_Exam.js : 자식 컴포넌트(연습문제)
// rfce
// TODO: 데이터 전달받아 아래와 같이 콘솔에 출력되었습니다.,
// TODO: 화면이 뜰때 자동 출력되었음 : console.log()
// 결과 : "From App"
//       "useEffect"
import React, { useEffect } from "react";

function C_Exam(props) {
  // TODO: 생명 주기 함수 (생성)
  // TODO: 화면이 뜰때 자동 실행됨
  useEffect(() => {
    console.log(props.prop_value); // "From App"
    console.log("useEffect"); // "useEffect"
  }, []);

  return <div>C_Exam</div>;
}

export default C_Exam;
