// todo: 외부 lib import
// 개발자 css import
import "./assets/css/style.css";
// aos css import
import "aos/dist/aos.css";
// swiper css import
import "swiper/swiper-bundle.min.css";

// todo: 리액트 import
import React from "react";

import HeaderCom from "./components/common/HeaderCom";
import Home from "./pages/Home";
import FooterCom from "./components/common/FooterCom";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/common/NotFound";

function App() {
  return (
    <div className="App">
      {/* 머리말 */}
      <HeaderCom />
      {/* 본문 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* 꼬리말 */}
      <FooterCom />
    </div>
  );
}

export default App;
