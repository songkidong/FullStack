// Home 자식 컴포넌트
// rfce : 리액트 템플릿 단축키
import React, { useEffect, useState } from "react";
// 통신 라이브러리 설정파일 : http-common.js(프론트 - 벡엔드 연결)
import http from "../http-common.js";

function Home() {
  // TODO: 변수 정의
  let [dept, setDept] = useState([]); // 벡엔드 전송받을 객체배열을 담을 변수

  // TODO: 함수 정의
  // axios 함수를 이용해서 벡엔드 데이터를 받아오기 : promise (.then().catch())
  //                            : http://localhost:8000/dept
  // 기본주소 : http://localhost:8000 , 추가url : /dept
  // nfn : 화살표 단축기
  const retrieveContent = () => {
    http
      .get("/dept") // 벡엔드 데이터 받아오기 함수(요청)
      .then((response) => {
        // 벡엔드 데이터 받기 성공하면 자동 실행
        setDept(response.data); // 실제 받은 벡엔드 데이터(response.data)
        // 로그 찍기
        console.log(response.data);
      });
    // .catch()   // 벡엔드 데이터 받기 실패하면 자동 실행
  };

  //  화면이 뜰때 retrieveContent() 함수 실행
  // 사용법 : useEffect(함수명, []);
  useEffect(retrieveContent, []);

  return (
    // 찾기/바꾸기 기능(단축키) : ctrl + r
    <div className="container">
      <h2 className="mt-3"> AXIOS 테스트 </h2>
      {/* 사용법 : dept.map((value, index)=>(<li>{value.dname}</li>)) */}
      <ul className="list-group">
        {dept.map((value, index) => (
          <li className="list-group-item" key={index}>
            {value.dname}
          </li>
        ))}
        {/* <li className="list-group-item">An item</li> */}
      </ul>
    </div>
  );
}

export default Home;
