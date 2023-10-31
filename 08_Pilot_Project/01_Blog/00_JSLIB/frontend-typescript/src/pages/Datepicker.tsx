// Datepicker.tsx : rfce
import React, { useEffect, useRef, useState } from "react";

function Datepicker() {
  // todo: 변수 정의
  const [jdate, setJdate] = useState("");

  // todo: 리액트에서 특정태그에 직접접근하는 방법 : const 변수명 = useRef()
  // todo: html input 태그에 속성 정의 : ref={변수명}
  // 바닐라 : querySelector(선택자) 유사
  const datepicker = useRef<HTMLInputElement>(null);

  // todo: 함수 정의
  // 수동 바인딩 : 화면값 -> jdate 저장
  const onChangeJdate = (event: any) => {
    setJdate(event.target.value);
  };

  // 현재 달력에(ref={datepicker}) 선택된 값을 출력하는 버튼 함수
  const printDate = () => {
    // useRef 함수 값 가져오기 (달력 연결 : 달력 값)
    // es5 사용법 : 널리쉬 ?
    // 변수?속성명 -> 만약 변수가 null -> undefined 변경됨
    //               변수가 null 아니면 -> 속성명이 실행됨
    // alert(datepicker.current?.value);
    if (datepicker.current != null) {
      alert(datepicker.current.value); // 값 가져오기
    }
  };

  // 특정날짜를 달력 입력창에 표시하는 버튼 함수
  const setDate = () => {
    // (datepicker.current as any).value = "2023-10-31";
    if (datepicker.current != null) {
      datepicker.current.value = "2023-10-31";
    }
  };

  // 화면이 뜰때 달력(외부 lib) 만들기
  useEffect(() => {
    $(function () {
        // 사용법 : $(선택자).datepicker({옵션});
        ($("#datepicker") as any).datepicker(
          {
            dateFormat: "yy-mm-dd", // 날짜 포맷
            showOn: "button",     // 입력창 옆에 달력 기본 버튼 보이기
            buttonImage:          // 버튼에 기본 이미지 넣기
              "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
          }
        );
      });
  },[])   

  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="daterange">daterange</label>
        {/* 달력 시작 */}
        <p>
          Date:
          <input
            type="text"
            id="datepicker"
            ref={datepicker}
            value={jdate}
            onChange={onChangeJdate}
          />
        </p>
        {/* 달력 끝 */}
        {/* 현재 달력에 선택된 값을 출력하는 버튼 : alert() */}
        <button
          className="btn btn-primary btn-sm mt-2 mb-2"
          onClick={printDate}
        >
          출력
        </button>
        &nbsp;&nbsp;
        {/* 특정날짜를 달력 입력창에 표시하는 버튼 */}
        <button
          className="btn btn-primary btn-sm mt-2 mb-2"
          onClick={() => setDate()}
        >
          날짜 지정
        </button>
        <br />
      </div>
    </div>
  );
}

export default Datepicker;
