// todo: external lib import
// todo: animate css import (wow 사용시 import 필요)
import "wowjs/css/libs/animate.css";
// todo: simplelightbox css import
import "simplelightbox/dist/simple-lightbox.css";

// todo: internal import
import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderCom from './components/common/HeaderCom';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BootstrapIcons from './pages/BootstrapIcons';
import CounterUp from './pages/CounterUp';
import CounterUpExam from './pages/CounterUpExam';
import TypedCom from './pages/TypedCom';
import TypedComExam from './pages/TypedComExam';
import WowCom from './pages/WowCom';
import SimpleLightboxCom from "./pages/SimpleLightboxCom";
import SimpleLightboxComExam from "./pages/SimpleLightboxComExam";
import OwlCarouselCom from "./pages/OwlCarouselCom";
import OwlCarouselComExam from "./pages/OwlCarouselComExam";
import ISotopeCom from "./pages/IsotopeCom";
import IsotopeComExam from "./pages/IsotopeComExam";
import EasingCom from "./pages/EasingCom";
import Datepicker from "./pages/Datepicker";
import DaterangePicker from "./pages/DaterangePicker";

function App() {
  return (
    <div className="App">
      {/* 머리말 */}
      <HeaderCom/>

      {/* 본문 */}
      <div className='container mt-3'>
        <Routes>
          {/* / : 홈메뉴(1st 페이지) */}
          <Route path="/" element={<Home />} />
          <Route path="/bootstrap-icons" element={<BootstrapIcons />} />

          {/* countUp */}
          <Route path="/countup" element={<CounterUp />} />
          {/* 연습1) 1,234,567.00 줄바꿈, 1.99 줄바꿈, 12345 줄바꿈 화면 카운팅하세요 */}
          <Route path="/countup-exam" element={<CounterUpExam />} />

          {/* typed.js */}
          <Route path="/typed" element={<TypedCom />} />
          {/* 연습2) ["안녕하세요", "또 만납시다.", "잘가세요."]
              <!-- backSpeed: 0, typeSpeed: 0 으로 사용해 보세요 -->
           */}
          <Route path="/typed-exam" element={<TypedComExam />} />

          {/* wowjs */}
          <Route path="/wow" element={<WowCom />} />

          {/* simplelightbox */}
          <Route path="/simple-lightbox" element={<SimpleLightboxCom />} />
          {/* div(gallery) */}
          {/* 연습3)  "../assets/img/gallery/full/01.jpg" ~ 06.jpg: 풀이미지 (화면이미지) a태그
                      "../assets/img/gallery/thumb/01.jpg" ~ 06.jpg : 작은이미지 (클릭시 나오는 이미지) img태그
          */}
          <Route path="/simple-lightbox-exam" element={<SimpleLightboxComExam />} />

          {/* owl-carousel */}
          <Route path="/owl-carousel" element={<OwlCarouselCom />} />
          {/* 연습 4) 주어진 html 이용해서 carousel을 구현하세요 */}
          <Route path="/owl-carousel-exam" element={<OwlCarouselComExam />} />

          {/* isotope(동위원소) */}
          <Route path="/isotope" element={<ISotopeCom />} />
          {/* 연습 5) first, second, third 로 div 태그를 지정하고 isotope 기능을 추가하세요 */}
          <Route path="/isotope-exam" element={<IsotopeComExam />} />

          {/* easing */}
          <Route path="/easing" element={<EasingCom />} />

          {/* calendar */}
          <Route path="/datepicker" element={<Datepicker />} />
          <Route path="/daterange-picker" element={<DaterangePicker />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
