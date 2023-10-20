// H_ProfileCard.js : 자식컴포넌트
// rfce
// TODO: 리액트에서 스타일 속성 사용하기
import React,{useState} from "react";

function H_ProfileCard() {
  // TODO: 변수 정의
  let [title, setTitle] = useState("Inje Lee");

  return <div
            style={{ margin: 8,
                     padding: 8,
                     borderRadius: 8,
                     backgroundColor: "#4ea04e"
            }}
        >
    {/* title === true 이면 && 뒤에 태그가 화면에 보임 */}
    {/* 코딩의 관례적사용 : 변수에 어떤 값이 있으면 무조건 true
            false ==> null, [], {}, 0
     */}
    { title && <h1>{title}</h1>}
    <p>안녕하세요, 소플입니다.</p>
    <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
  </div>;
}

export default H_ProfileCard;
