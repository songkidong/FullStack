// AddEmp.js : 연습) 추가 사원 페이지
import React, { useState } from "react";
import EmpService from "../../services/EmpService";

function AddEmp() {
  // TODO: 변수 정의 : customer(속성 : html태그에 있음), submitted
  // TODO: EmpService.js (공통함수 : create 함수 정의)
  // 임시 객체(초기화)
  const initialCustomer = {
    id: null, // 번호(자동생성)
    cname: "", // 사원명
    email: "", // 사원이메일
    phone: "", // 사원전화번호
  };

  // 바인딩 변수 : let [변수명, set변수명] = useState(초기값);
  let [customer, setCustomer] = useState(initialCustomer); // 벡엔드로 전송할 변수(insert 요청)
  let [submitted, setSubmitted] = useState(false); // 저장버튼 클릭여부를 가진 변수

  // TODO: 함수 정의
  // 역바인딩 함수 : onChange={handleInputChange}
  const handleInputChange = (event) => {
    let attrValue = event.target.value; // 화면 입력값(객체의 속성값)
    let attrName = event.target.name; // 화면의 태그 이름(===객체의 속성명)
    // 스프레드 연산자로 속성의 값을 수정
    setCustomer({ ...customer, [attrName]: attrValue });
  };

  //  저장 함수 : 클릭 함수(onClick={함수명})
  // nfn
  // 벡엔드로 customer 객체를 저장 요청 (axios : 공통저장함수(create()))
  const saveCustomer = () => {
    // 임시 저장용 객체
    let data = {
      cname: customer.cname, // 화면 입력값(사원명)
      email: customer.email, // 화면 입력값(이메일)
      phone: customer.phone, // 화면 입력값(전화번호)
    };

    EmpService.create(data) // 저장 요청(사원객체)
      .then((response) => {
        // 성공하면 자동실행
        setCustomer(response.data); // 벡엔드에 저장한 객체를 받아서 변수에 저장
        setSubmitted(true); // 저장 버튼 클릭 + 저장성공(false -> true)
        // 로그 찍기
        console.log(response.data);
      })
      .catch((e) => {
        // 실패하면 자동실행
        console.log(e); // 에러 메세지 출력
      });
  };

  //  저장 버튼 클릭: 새로운 화면 전환(버튼이 1개 있는 화면)
  //  3항 연산자의 다른 화면이 출력(submitted == true)
  // nfn
  const newCustomer = () => {
    // 역할 : 변수 초기화 (객체, submitted = false)
    setCustomer(initialCustomer); // 빈화면으로 폼(from)이 뜸
    setSubmitted(false);
  };
  return (
    // TODO: 여기
    <div className="row">
      {submitted ? (
        <div className="col-6 mx-auto">
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newCustomer}>
            Add
          </button>
        </div>
      ) : (
        <>
          <div className="row">
            {/* 제목 시작 */}
            <div className="col-md-6 mb-5 mt-5">
              <h1>Add Emp</h1>
            </div>
            {/* 제목 끝 */}
          </div>

          <div className="col-6 mx-auto">
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="cname" className="col-form-label">
                  Cname
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="cname"
                  required
                  className="form-control"
                  value={customer.cname}
                  onChange={handleInputChange}
                  placeholder="cname"
                  name="cname"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="email" className="col-form-label">
                  email
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="email"
                  required
                  className="form-control"
                  value={customer.email}
                  onChange={handleInputChange}
                  placeholder="email"
                  name="email"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="phone" className="col-form-label">
                  phone
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="phone"
                  required
                  className="form-control"
                  value={customer.phone}
                  onChange={handleInputChange}
                  placeholder="phone"
                  name="phone"
                />
              </div>
            </div>

            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={saveCustomer}
                className="btn btn-outline-primary ms-2 col"
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default AddEmp;
