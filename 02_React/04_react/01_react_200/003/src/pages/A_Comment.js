// A_Comment.js : 자식
// rfce
import React from "react";
// Comment.css import
import "../assets/Comment.css";
import "../assets/styles.css";

import { useState } from "react";

function A_Comment() {
  // TODO: 변수/함수 정의 : 여기
  // 사용법 : let [변수, set변수] = useState(초기값);
  // set변수 : setter 함수 (변수 값 저장 용도 함수)
  // 화면 바인딩 용도 : useState() 함수 (훅(hook) 함수 : useXXX())
  let [name, setName] = useState("홍길동");
  let [comment, setComment] = useState("메모");

  return (
    <div className="wrapper">
      <div className="imageContainer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          className="image"
        />
      </div>

      <div className="contentContainer">
        <span className="nameText">{name} </span>
        <span className="commentText">{comment} </span>
      </div>
    </div>
  );
}

export default A_Comment;
