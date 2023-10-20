// CommentList_Exam.js
// TODO : 아래 데이터가 주어졌을때 화면에 출력하세요
import React, { useState } from "react";
import "../assets/styles.css";

function E_CommentList_Exam() {
  // TODO : 아래 데이터가 주어졌을때 화면에 출력하세요
  const initialComments = [
    {
      id: 1,
      title: "어떻게 배울 것인가",
      publisher: "비즈니스북스",
      author: "존 맥스웰",
      stock: 2,
    },
    {
      id: 2,
      title: "신경끄기의 기술",
      publisher: "갤리온",
      author: "마크 맨슨",
      stock: 0,
    },
    {
      id: 3,
      title: "부의 미래",
      publisher: "청림출판",
      author: "앨빈 토플러",
      stock: 5,
    },
    {
      id: 4,
      title: "기획자의 습관",
      publisher: "홍익출판사",
      author: "최장순",
      stock: 4,
    },
  ];

  // 변수/함수 정의
  //   사용법 : let [] = useState() : 바인딩 변수(객체배열 === 배열)
  let [comments, setComments] = useState(initialComments);
  // -------------------------
  // html 태그
  //
  return (
    <div>
      {/* TODO :배열변수.map() 사용해서 반복문을 
                작성하세요 */}
      {/* map 사용법 : 배열변수.map(()=>{return(태그)}) */}
      {/* comment : 배열의 값, index : 배열의 인덱스번호 */}
      {comments.map((comment, index) => {
        return (
          // html 태그(반복)
          <div>
            <div>
              <span>{comment.title}</span>&nbsp;
              <span>{comment.publisher}</span>&nbsp;
              <span>{comment.author}</span>&nbsp;
              <span>{comment.stock}</span>&nbsp;
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default E_CommentList_Exam;
