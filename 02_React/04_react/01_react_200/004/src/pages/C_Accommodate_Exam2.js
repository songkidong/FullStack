// C_Accommodate_Exam2.js : 자식(연습)
// rfce
// TODO : 연습문제 ) 아래 소스를 완성하세요
//   버튼을 클릭하면 isTable 변수의 값을 true 로 바꾸고,
//   아래 내용을 담고 있는 테이블 태그로
//   화면에 보이게 만드세요.
//   (부트스트랩 테이블 디자인을 활용하세요.)
//    테이블 내용 :
//               No   Dname       Loc
//               1    Sales       부산
//               2    Development 서울
import React, { useState } from "react";

function C_Accommodate_Exam2() {
  // TODO: 변수 정의
  // 사용법 : let [변수명, set변수명] = useState(초기값);
  let [isTable, setIsTable] = useState(false);

  // TODO: 함수 정의
  // nfn
  // 클릭 함수
  const blueClick = () => {
    // isTable : false -> true, setTable(변경값)
    setIsTable(true);
  };
  return (
    <div>
      <button onClick={blueClick} className="btn btn-warning">
        테이블 보이기
      </button>
      <br />
      {/* {변수 && 태그} : 변수(참) 태그가 보임 */}
      {isTable && (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Dname</th>
              <th scope="col">Loc</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Sales</td>
              <td>부산</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Development</td>
              <td>서울</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default C_Accommodate_Exam2;
