// B_Props.js : 자식 컴포넌트
// rfce
// TODO: 부모 데이터 -> 자식 컴포넌트로 전달 : props
import React from "react";
import { useEffect } from "react";

function B_Props(props) {
  // 생명주기 생성 함수 : 자동 실행
  // 화면이 뜰 때 자동 실행
  // 사용법 : useEffect(화살표함수() => {},[])
  useEffect(() => {
    // props.prop_value : 부모 -> 자식으로 전달된 값
    console.log("props 값 :" + props.prop_value);
  }, []);

  return <div>B_Props</div>;
}

export default B_Props;
