// todo: 외부 lib import
// 개발자 css import
import "./assets/css/style.css";
// aos css import
import "aos/dist/aos.css";
// swiper css import
// (참고) xxx.css ->(압축) xxx-min.css
//       xxx.js ->(압축) xxx-min.js (압축파일)
import "swiper/swiper-bundle.css"

// todo: 리액트 import
import React from 'react';
import HeaderCom from './components/common/HeaderCom';
import Home from './pages/Home';
import FooterCom from './components/common/FooterCom';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/common/NotFound';
import About from "./pages/About";
import Contact from './pages/Contact';
import Events from "./pages/Events";
import Pricing from "./pages/Pricing";
import Trainers from "./pages/Trainers";
import Courses from "./pages/Courses";
import CustomerListPage from './pages/customer/CustomerListPage';
import AddCustomerPage from "./pages/customer/AddCustomerPage";
import CustomerPage from "./pages/customer/CustomerPage";
import QnaListPage from "./pages/qna/QnaListPage";
import AddQnaPage from "./pages/qna/AddQnaPage";
import QnaPage from "./pages/qna/QnaPage";

function App() {
  return (
    <div className="App">
      {/* 머리말 */}
      <HeaderCom />
      {/* 본문 */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />

        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/trainers" element={<Trainers/>} />
        <Route path="/courses" element={<Courses/>} />

        {/* customer */}
        <Route path="/customer" element={<CustomerListPage/>} />
        <Route path="/add-customer" element={<AddCustomerPage/>} />
        <Route path="/customer/:cid" element={<CustomerPage/>} />

        {/* qna */}
        <Route path="/qna" element={<QnaListPage/>} />
        <Route path="/add-qna" element={<AddQnaPage/>} />
        <Route path="/qna/:qno" element={<QnaPage/>} />


      </Routes>
      {/* 꼬리말 */}
      <FooterCom/>

    </div>
  );
}

export default App;
