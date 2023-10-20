import React from "react";
// app css import
import "./assets/css/app.css";

import HeaderCom from "./components/common/HeaderCom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import NotFound from "./pages/common/NotFound";
import DeptListNop from "./pages/dept-nop/DeptListNop";
import EmpListNop from "./pages/emp-nop/EmpListNop";
import AddDeptNop from "./pages/dept-nop/AddDeptNop";
import AddEmpNop from "./pages/emp-nop/AddEmpNop";
import DeptNop from "./pages/dept-nop/DeptNop";
import EmpNop from "./pages/emp-nop/EmpNop";

function App() {
  return (
    <div className="App">
      <HeaderCom />

      {/* <!-- 구분 막대 시작 --> */}
      <div className="gutter text-center text-muted fade-in-box">
        <div>클론 코딩 예제 사이트에 오신 것을 환영합니다.</div>
      </div>
      {/* <!-- 구분 막대 끝 --> */}

      <div id="content-wrapper">
        {/* 라우터 정의 시작 */}
        <Routes>
          {/* login */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* dept */}
          <Route path="/dept-nop" element={<DeptListNop />} />
          <Route path="/add-dept-nop" element={<AddDeptNop />} />
          <Route path="/dept-nop/:dno" element={<DeptNop />} />

          {/* emp */}
          <Route path="/emp-nop" element={<EmpListNop />} />
          <Route path="/add-emp-nop" element={<AddEmpNop />} />
          <Route path="/emp-nop/:eno" element={<EmpNop />} />

          {/* NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* 라우터 정의 끝 */}
      </div>
    </div>
  );
}

export default App;
