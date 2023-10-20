// Dept.js : 자식컴포넌트
// rfce
import React, { useState } from "react";

function Dept() {
  // 객체배열 === JSON 데이터(문서)
  const initailDept = [
    {
      no: "1",
      dname: "Sales",
    },
    {
      no: "2",
      dname: "Marketing",
    },
    {
      no: "3",
      dname: "Research",
    },
  ];
  // 바인딩 변수
  // 사용법 : let [변수명, set변수명] = useState(초기값);
  let [dept, setDept] = useState(initailDept);

  return (
    <div className="container mt-5">
      {/* dept.map() 함수 실행 : 목록태그(ul-li(반복) : 부트스트랩) */}
      {/* 줄복사 : ctrl + d */}
      {/* 자동 정렬 단축키 : ctrl + alt + l */}
      <h4>Dept List</h4>

      <ul class="list-group mt-3">
        {/* dept.map(()=>(<li>문자열</li>)) */}
        {dept.map((value, index) => (
          <li class="list-group-item" key={index}>{value.dname}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dept;
