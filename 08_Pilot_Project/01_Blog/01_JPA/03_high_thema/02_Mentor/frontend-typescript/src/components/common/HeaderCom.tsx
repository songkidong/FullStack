// HeaderCom.tsx : rfce
import React from "react";
import { Link } from "react-router-dom";

function HeaderCom() {
  return (
    <>
      {/* <!-- ======= Header ======= --> */}
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="/">Mentor</a>
          </h1>
          {/* <!-- Uncomment below if you prefer href use an image logo --> */}
          {/* <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <a className="active" href="/">
                  Home
                </a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/courses">Courses</a>
              </li>
              <li>
                <a href="/trainers">Trainers</a>
              </li>
              <li>
                <a href="/events">Events</a>
              </li>
              <li>
                <a href="/pricing">Pricing</a>
              </li>
              {/* Q & A 메뉴 시작 */}
              <li className="dropdown">
                {/* 대메뉴 시작 */}
                <a href="#">
                  <span>Q & A </span> <i className="bi bi-chevron-down"></i>
                </a>
                {/* 대메뉴 끝 */}
                {/* 중메뉴 시작 */}
                <ul>
                  {/* 중메뉴 #1 */}
                  <li>
                    <Link to="/qna">Q & A 조회</Link>
                  </li>
                  {/* 중메뉴 #2 */}
                  <li>
                    <Link to="/add-qna">Q & A 추가</Link>
                  </li>
                </ul>
                {/* 중메뉴 끝 */}
              </li>
              {/* Q & A  메뉴 끝 */}
              {/* customer 메뉴 시작 */}
              <li className="dropdown">
                {/* 대메뉴 시작 */}
                <a href="#">
                  <span>고객</span> <i className="bi bi-chevron-down"></i>
                </a>
                {/* 대메뉴 끝 */}
                {/* 중메뉴 시작 */}
                <ul>
                  {/* 중메뉴 #1 */}
                  <li>
                    <Link to="/customer">고객 조회</Link>
                  </li>
                  {/* 중메뉴 #2 */}
                  <li>
                    <Link to="/add-customer">고객 추가</Link>
                  </li>
                </ul>
                {/* 중메뉴 끝 */}
              </li>
              {/* customer 메뉴 끝 */}
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* <!-- .navbar --> */}

          <a href="courses.html" className="get-started-btn">
            Get Started
          </a>
        </div>
      </header>
      {/* <!-- End Header --> */}
    </>
  );
}

export default HeaderCom;
