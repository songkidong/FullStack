// F_ConfirmButton_Exam2.js : 자식(연습)
// rfce
// TODO : 아래 변수 count 에 9 의 값이 있다.
//  10을 초과하면 ( count>10 )
// <p style={{ color: "red" }}>정원이 가득찼습니다.</p>
//  아니면 <p style={{ color: "blue" }}>입장할 수 있습니다.</p> 를 출력하세요.
import React, { useState } from "react";

function F_ConfirmButton_Exam2() {
  // TODO: 변수 정의
  let [count, setCount] = useState(9);
  // TODO: 함수 정의
  // nfn
  // 클릭하면 카운팅 : 1증가
  const handleConfirm = () => {
    let tmpVal = count + 1;
    setCount(tmpVal);
  };

  return (
    <div>
      현재 정원 : {count}
      <br />
      {/* count > 10 비활성화(true) */}
      <button
        onClick={handleConfirm}
        disabled={count > 10 === true ? true : false}
      >
        {count > 10 === true ? (
          <p style={{ color: "red" }}>정원이 가득찼습니다.</p>
        ) : (
          <p style={{ color: "blue" }}>입장할 수 있습니다.</p>
        )}
      </button>
    </div>
  );
}

export default F_ConfirmButton_Exam2;
