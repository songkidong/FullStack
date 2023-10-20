// AddEmp.js
// rfce
// TODO: 아래 화면에 변수/함수명을 보고 js 코드를 완성하세요.
import React, {useState} from "react";
import "../assets/chapter15.css";

function AddEmp() {

  // TODO: 변수 정의
  // 임시 객체 정의
  const initailEmp = {
    ename: "",       // 사원명
    job: "",         // 직위
    manager: "",     // 관리자 사번
    hiredate: "",    // 입사일
    salary: "",      // 월급
    commission: "",  // 인센티브(보너스, 상여금)
    dno: ""          // 부서번호
  }

  // 바인딩 변수
  // 사용법 : let [변수명, set변수명] = useState(초기값);
  let [emp, setEmp] = useState(initailEmp);

  // TODO: 함수 정의
  // onChange : 역바인딩 함수(직접 코딩) : handleChange()
  // nfn : 화살표 단축키
  const handleChange = (event) => { 
    // 현재 화면 입력값 : event.target.value
    let attrValue = event.target.value;
    // 현재 화면 태그의 이름 : 
    let attrName = event.target.name; // 태그의 이름 === 객체의 속성명
    // 스프레드 연산자로 객체 속성 수정
    setEmp({ ...emp, [attrName]:attrValue})
   }

  //  클릭 이벤트 함수 : saveEmp()
  // nfn : 화살표 단축키
  const saveEmp = () => { 
    alert("저장되었습니다.")
   }

  return (
    // TODO: 여기
    <div className="submit-form">
      {/* ename 시작 */}
      <div className="form-group">
        <label htmlFor="ename">Ename</label>
        <input
          type="text"
          className="form-control"
          id="ename"
          required
          value={emp.ename}
          onChange={handleChange}
          name="ename"
        />
      </div>
      {/* ename 끝 */}

      {/* job 시작 */}
      <div className="form-group">
        <label htmlFor="job">Job</label>
        <input
          type="text"
          className="form-control"
          id="job"
          required
          value={emp.job}
          onChange={handleChange}
          name="job"
        />
      </div>
      {/* job 끝 */}

      <div className="form-group">
        <label htmlFor="manager">manager</label>
        <input
          type="number"
          className="form-control"
          id="manager"
          required
          value={emp.manager}
          onChange={handleChange}
          name="manager"
        />
      </div>

      <div className="form-group">
        <label htmlFor="hiredate">hiredate</label>
        <input
          type="number"
          className="form-control"
          id="hiredate"
          required
          value={emp.hiredate}
          onChange={handleChange}
          name="hiredate"
        />
      </div>

      <div className="form-group">
        <label htmlFor="salary">salary</label>
        <input
          type="number"
          className="form-control"
          id="salary"
          required
          value={emp.salary}
          onChange={handleChange}
          name="salary"
        />
      </div>

      <div className="form-group">
        <label htmlFor="commission">commission</label>
        <input
          type="number"
          className="form-control"
          id="commission"
          required
          value={emp.commission}
          onChange={handleChange}
          name="commission"
        />
      </div>

      <div className="form-group">
        <label htmlFor="dno">dno</label>
        <input
          type="number"
          className="form-control"
          id="dno"
          required
          value={emp.dno}
          onChange={handleChange}
          name="dno"
        />
      </div>

      <button onClick={saveEmp} className="btn btn-success mt-3">
        Submit
      </button>
    </div>
  );
}

export default AddEmp;
