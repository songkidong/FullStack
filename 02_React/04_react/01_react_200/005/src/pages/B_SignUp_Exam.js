// B_SignUp_Exam.js : 연습
// rfce
import React,{useState} from "react";

// TODO : 연습문제 ) 변수/ 함수에 맞추어 코딩하기
// TODO: 변수 초기값은 모두 "" 하세요
// TODO: 추가) 입력양식 부트스트랩 디자인도 추가해 보세요
// TODO: name, password, email, phone, address 변수 정의(정방향 바인딩)
// TODO: onChange 함수들을 정의하세요(역방향 바인딩)

function B_SignUp_Exam() {
  // TODO: 변수 정의 : 정방향 바인딩
  let [name, setName] = useState(""); // input value={name}
  let [password, setPassword] = useState(""); // input value={password}
  let [email, setEmail] = useState(""); // input value={email}
  let [phone, setPhone] = useState(""); // input value={phone}
  let [address, setAddress] = useState(""); // input value={address}

  // TODO: 함수 정의 : 역방향 바인딩(OnChange 이벤트)
  // TODO: 화면 값(event.target.value)
  // TODO:      -> 변수 값으로 변경(setter 함수: setName(변경값))
  // nfn : 화살표함수 단축키
  const handleChangeName = (event) => {
    // 화면값 -> 변수값 변경
    setName(event.target.value); // 역방향 바인딩 코딩
  };

  //  nfn
  const handleChangePassword = (event) => {
    // 화면값 -> 변수값 변경
    setPassword(event.target.value); // 역방향 바인딩 코딩
  };
  
  //  nfn
  const handleChangeEmail = (event) => {
    // 화면값 -> 변수값 변경
    setEmail(event.target.value); // 역방향 바인딩 코딩
  };
  
  //  nfn
  const handleChangePhone = (event) => {
    // 화면값 -> 변수값 변경
    setPhone(event.target.value); // 역방향 바인딩 코딩
  };
  
  //  nfn
  const handleChangeAddress = (event) => {
    // 화면값 -> 변수값 변경
    setAddress(event.target.value); // 역방향 바인딩 코딩
  };

  //  클릭이벤트 함수
  //  nfn
  const handleSubmit = (event) => {
    event.preventDefault(); // 기본 기능 막기 함수
    alert(`이름 : ${name} 패스워드 : ${password}
        이메일 : ${email} 폰: ${phone} 주소 : ${address}
        `);
  };

  return (
    // TODO: 여기
    <div>
      <form>
        <label>
          이름:
          <input
            className="form-control"
            type="text"
            value={name}
            name="name"
            onChange={handleChangeName}
          />
        </label>

        <br />
        <label>
          패스워드:
          <input
            className="form-control"
            type="password"
            value={password}
            name="password"
            onChange={handleChangePassword}
          />
        </label>

        <br />
        <label>
          email:
          <input
            className="form-control"
            type="email"
            value={email}
            name="email"
            onChange={handleChangeEmail}
          />
        </label>

        <br />
        <label>
          phone:
          <input
            className="form-control"
            type="text"
            value={phone}
            name="phone"
            onChange={handleChangePhone}
          />
        </label>

        <br />
        <label>
          주소:
          <input
            className="form-control"
            type="text"
            value={address}
            name="address"
            onChange={handleChangeAddress}
          />
        </label>

        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          제출
        </button>
      </form>
    </div>
  );
}

export default B_SignUp_Exam;
