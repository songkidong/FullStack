// CommentList_Exam2.js
// TODO : 연습문제 아래 데이터를 반복문으로

import React, { useState } from "react";
import "../assets/styles.css";

function F_CommentList_Exam2() {
  // TODO : 연습문제 아래 데이터를 반복문으로
  //        출력하세요
  const initialWebtoons = [
    {
      name: "햄스터와 그녀",
      link: "https://webtoon.kakao.com/content/%ED%96%84%EC%8A%A4%ED%84%B0%EC%99%80-%EA%B7%B8%EB%85%80/1625",
      img: "http://t1.daumcdn.net/webtoon/op/478cdf37f585607982ffa9e35b432e8503be8a54",
      isUpdate: true,
    },
    {
      name: "프롬 스타",
      link: "https://webtoon.kakao.com/content/%ED%94%84%EB%A1%AC-%EC%8A%A4%ED%83%80/1573",
      img: "http://t1.daumcdn.net/webtoon/op/a7fb953d722c1130bfc18440f7e3ce448ece57a1",
      isUpdate: true,
    },
    {
      name: "위대한 로맨스",
      link: "https://webtoon.kakao.com/content/%EC%9C%84%EB%8C%80%ED%95%9C-%EB%A1%9C%EB%A7%A8%EC%8A%A4/1564",
      img: "http://t1.daumcdn.net/webtoon/op/a816281cb4df5c50a20ac386fd6e496643d0f085",
      isUpdate: false,
    },
    {
      name: "빛나는 손을",
      link: "https://webtoon.kakao.com/content/%EB%B9%9B%EB%82%98%EB%8A%94-%EC%86%90%EC%9D%84/1366",
      img: "http://t1.daumcdn.net/cartoon/5913FCAC0234C50001",
      isUpdate: false,
    },
  ];

  //   TODO: 변수 정의(useState())
  let [webtoons, setWebtoons] = useState(initialWebtoons);

  // 변수/함수 부분
  // -----------------------------------
  // html 부분

  return (
    <div>
      {/* html 아래 내용 반복문 수행 */}
      {/* 반복문 : 배열변수.map(()=>{return(태그)}) */}
      {webtoons.map((webtoon, index) => {
        return (
          // html 태그 추가(반복)
          <div className="wrapper" key={index}>
            <div className="contentContainer">
              <span className="commentText">
                <img src={webtoon.img} />{" "}
              </span>
              <br />
              <span className="nameText">{webtoon.name}</span>
              <span className="commentText">
                <a href={webtoon.link}>{webtoon.link}</a>
              </span>
              <span className="commentText">
                {webtoon.isUpdate ? "true" : "false"}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default F_CommentList_Exam2;
