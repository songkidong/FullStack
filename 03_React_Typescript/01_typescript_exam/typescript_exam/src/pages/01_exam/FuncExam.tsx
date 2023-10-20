// FuncExam.tsx : 자식(연습)
// rfce
import React, { useState } from "react";

function FuncExam() {
    // TODO: 변수 정의
    let [password, setPassword] = useState<string>("");
    let [message, setMessage] = useState<string>("");

    // TODO: 함수 정의
    // getInput("안녕하세요", 4, true)
    const getInput = (arg: string, arg2: number, arg3: boolean): void => {
      setMessage(`${arg} 오늘날짜는 ${arg2} 일이 맞나요? 답은 ${arg3} 입니다.`)
    }

    // 역바인딩 함수
    // TODO: 생략가능 자료형 : 1) 함수의 리턴자료형 생략가능
    const onChangPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    }
  return (
    <div className="container">
      <input
        className="form-control mt-3 mb-3 w-25"
        type="password"
        name="password"
        value={password}
        onChange={onChangPassword}
      />
      입력값 : {password}
      <br />
      <button
        className="btn btn-primary mt-3 mb-3"
        onClick={() => getInput("안녕하세요", 4, true)}
      >
        입력값
      </button>
      <br />
      {message}
    </div>
  );
}

export default FuncExam;
