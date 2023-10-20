// D_Exam2.js : 연습문제
// rfce
// TODO: 아래 생명주기 함수 2개를 만들어서 출력하세요
// TODO: 1) 화면이 뜰때 아래의 결과가 콘솔에 출력됨(console.log)
// TODO: 결과 : mount call

// TODO: 2) tmpState2 라는 변수의 값이(true) 변경되면 콘솔에 출력됨(console.log)
// TODO:    버튼을 클릭하면 변수의 값이 변경됨
// TODO: 결과 : false
import React, { useEffect, useState } from "react";

function D_Exam2() {
  // TODO: 변수 (바인딩)
  // 사용법 : let [변수명, set변수명] = useState(초기값);
  let [tmpState2, setTmpState2] = useState(true);

  // TODO: 1) 생명 주기 함수(생성) : 출력 : mount call
  // TODO: 화면이 뜰때 자동 실행
  // 사용법 : useEffect(()=>{실행문}, []);
  useEffect(() => {
    console.log("mount call");
  }, []);

  // TODO: 2) 생명 주기 함수(수정) : tmpState2 : true -> false (콘솔에 출력)
  // 사용법 : useEffect(()=>{실행문}, [감시할변수명]);
  useEffect(() => {
    console.log(tmpState2); // 변수값 바뀌면 실행
  }, [tmpState2]);

  // TODO: 2-2) 클릭 이벤트 함수 정의
  // 화살표 함수 단축키 : nfn
  const handleClick = () => {
    // 수정함수 : setter 함수 호출 : 값 변경 : true -> false
    setTmpState2(false);
  };

  return (
    <div>
      <h2>[ THIS IS shouldComponentUpdate FUCNTION ]</h2>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}

export default D_Exam2;
