// AddDept.js : 자식 컴포넌트
// rfce
import React, {useState} from "react";
import "../assets/chapter15.css"

function AddDept() {

  // TODO: 변수 정의 (바인딩 변수 : useState())
  // 임시 객체
  const initialDept = {
    dname: "", // 부서명
    loc: "",   // 부서위치
  }

  // 바인딩 변수
  // 사용법 : let [변수명, set변수명] = useState(초기값);
  let [dept, setDept] = useState(initialDept); // input 의 value :부서명/부서위치

  // TODO: 함수 정의
  // 역바인딩 함수 : onChange 의 함수와 바인딩(개발자 직접 코딩)
  // nfn : 화살표 함수 단축키
  const handleChange = (event) => { 
    // 현재 화면 입력값 : event.target.value
    let attrValue = event.target.value;
    // 현재 화면 태그의 이름 : 
    let attrName = event.target.name; // 태그의 이름 === 객체의 속성명
    // 스프레드 연산자로 객체 속성 수정
    setDept({ ...dept, [attrName]:attrValue})
   }

  //  클릭 이벤트 함수 : saveDept()
  // nfn : 화살표 단축키
  const saveDept = () => { 
    alert("저장되었습니다.");
   }


  return (
    // TODO: 여기
    <div className="submit-form">
      <div>
        <div className="form-group mb-3">
          <label htmlFor="dname">Dname</label>
          <input
            type="text"
            className="form-control"
            id="dname"
            required
            value={dept.dname}
            onChange={handleChange}
            name="dname"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="loc">Loc</label>
          <input
            type="text"
            className="form-control"
            id="loc"
            required
            value={dept.loc}
            onChange={handleChange}
            name="loc"
          />
        </div>

        <button onClick={saveDept} className="btn btn-success">
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddDept;
