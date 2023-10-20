// Dept.js : 부서 상세페이지(수정/삭제)
// rfce
import React, { useState, useEffect } from "react";
// 메뉴 라이브러리
import { useNavigate, useParams } from "react-router-dom";
import DeptService from "./../../services/DeptService";

function Dept() {
  // TODO: 변수 정의
  // 이전페이지에서 변수(id)의 값(부서번호)을 전송 : 받기
  const { id } = useParams(); // 전송된 값 받기 함수 호출
  let navigate = useNavigate(); // 페이지 강제 이동시키는 함수

  // 임시 객체 : 초기화
  const initialDept = {
    id: "", // 부서번호
    dname: "", // 부서명
    loc: "", // 부서위치
  };

  // 바인딩 변수
  let [dept, setDept] = useState(initialDept); // 벡엔드로 전송할 변수(insert 요청)
  let [message, setMessage] = useState(""); // 수정버튼 클릭후 성공여부 가진 메세지변수

  // TODO: 함수 정의
  // 최초 화면이 뜰때 부서번호에 해당하는 데이터를 화면에 표시하는 함수
  // 1건 조회 함수(상세조회 함수)
  // 백엔드의 부서번호에 부서객체를 요청(1건 리턴)
  // axios 함수 : get(`/url/${id}`) 함수 [vs 저장요청 : post()]
  const getDept = (id) => {
    DeptService.get(id) // 상세조회 요청(id)
      .then((response) => {
        // 성공시 자동실행
        setDept(response.data); // 백엔드에서 보내준 결과 저장
        // 로그 찍기
        console.log(response.data);
      })
      .catch((e) => {
        // 실패시 자동실행
        console.log(e); // 에러메시지 출력
      });
  };

  // 화면이 뜰때 실행되는 함수 + id 값이 수정되었을때도 자동실행
  // 사용법(수정) : useEffect(() => {실행문}, [감시할변수명]);
  useEffect(() => {
    if (id) {
      getDept(id); // 상세조회 함수 실행
    }
  }, [id]);

  // 역바인딩 함수
  const handleInputChange = (event) => {
    let attrValue = event.target.value; // 화면 입력값(객체의 속성값)
    let attrName = event.target.name; // 화면의 태그 이름(===객체의 속성명)
    // 스프레드 연산자로 속성의 값을 수정
    setDept({ ...dept, [attrName]: attrValue });
  };

  // 수정함수 : 클릭
  // axios 공통함수 : axios.put("url/부서번호", 수정될객체)
  const updateDept = () => {
    DeptService.update(dept.id, dept) // 수정요청(부서번호(id), 부서객체(dept))
      .then((response) => {
        // 성공시 자동실행
        // 로그 찍기
        console.log(response.data);
        // 화면에 수정 성공 메세지를 출력
        setMessage("부서 수정이 성공하였습니다.");
      })
      .catch((e) => {
        // 실패시 자동실행
        console.log(e); // 에러메세지 출력
      });
  };

  // 삭제 함수 : 클릭
  // axios 공통함수 : axios.delete(/dept/부서번호)
  const deleteDept = () => {
    DeptService.remove(dept.id) // 삭제 요청(id)
      .then((response) => {
        // 성공시 자동실행
        // 로그 찍기
        console.log(response.data);
        // 삭제성공 후 자동으로 1st 페이지로 이동(전체 조회페이지)
        // 강제페이지 이동 함수 실행
        // 사용법 : navigate("이동될페이지주소")
        navigate("/dept");
      })
      .catch((e) => {
        // 실패시 자동실행
        console.log(e); // 에러메세지 출력
      });
  };
  return (
    // TODO: 여기
    <>
      {/* 제목 start */}
      <div className="row">
        {/* 제목 시작 */}
        <div className="col-md-6 mb-5 mt-5">
          <h1>Dept Detail No Page</h1>
        </div>
        {/* 제목 끝 */}
      </div>
      {/* 제목 end */}

      <>
        {dept ? (
          // 상세화면 form 시작
          <div className="col-6 mx-auto">
            <form>
              {/* 부서명(dname) 시작 */}
              <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                  <label htmlFor="dname" className="col-form-label">
                    Dname
                  </label>
                </div>

                <div className="col-9">
                  <input
                    type="text"
                    id="dname"
                    required
                    className="form-control"
                    value={dept.dname}
                    onChange={handleInputChange}
                    placeholder="dname"
                    name="dname"
                  />
                </div>
              </div>
              {/* 부서명 끝 */}

              {/* 부서위치(loc) 시작 */}
              <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                  <label htmlFor="loc" className="col-form-label">
                    Loc
                  </label>
                </div>

                <div className="col-9">
                  <input
                    type="text"
                    id="loc"
                    required
                    className="form-control"
                    value={dept.loc}
                    onChange={handleInputChange}
                    placeholder="loc"
                    name="loc"
                  />
                </div>
              </div>
              {/* 부서위치 끝 */}
            </form>

            {/* 버튼 시작 : 삭제 / 수정 버튼 */}
            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={deleteDept}
                className="btn btn-outline-danger ms-3 col"
              >
                Delete
              </button>

              <button
                type="submit"
                onClick={updateDept}
                className="btn btn-outline-success ms-2 col"
              >
                Update
              </button>
            </div>
            {/* 버튼 끝 : 삭제 / 수정 버튼 */}

            {/* 수정버튼을 클릭해서 성공하면 성공/실패메세지 출력 */}
            <p>{message}</p>
          </div>
        ) : (
          //   상세화면 form 끝
          // 에러시 보여줄 화면 시작
          <div className="col-6 mx-auto">
            <br />
            <p>Please click on a Dept...</p>
          </div>
          //   에러시 보여줄 화면 끝
        )}
      </>
    </>
  );
}

export default Dept;
