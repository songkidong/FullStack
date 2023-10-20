// Header.js : 공통 메뉴(머리말) 컴포넌트
// rfce
import React from "react";
import { Link } from "react-router-dom"; // 메뉴 라이브러리

function Header() {
  return (
    <div>
      {/* 부트스트랩 메뉴 추가 */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          {/* 메뉴 제목 시작 */}
          <Link to="/" class="navbar-brand">
            Simple DMS
          </Link>
          {/* 메뉴 제목 끝 */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* 아래 : 메뉴 등록 부분 시작 */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {/* dept 메뉴 시작 */}
              <li class="nav-item dropdown">
                {/* 대메뉴 시작 */}
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dept
                </a>
                {/* 대메뉴 끝 */}
                {/* 소메뉴 시작 */}
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/dept" class="dropdown-item">
                      Dept
                    </Link>
                  </li>
                  <li>
                    <Link to="/add-dept" class="dropdown-item">
                      Add Dept
                    </Link>
                  </li>
                </ul>
                {/* 소메뉴 끝 */}
              </li>
              {/* dept 메뉴 끝 */}
              {/* emp 메뉴 시작 */}
              <li class="nav-item dropdown">
                {/* 대메뉴 시작 */}
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Emp
                </a>
                {/* 대메뉴 끝 */}
                {/* 소메뉴 시작 */}
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/emp" class="dropdown-item">
                      Emp
                    </Link>
                  </li>
                  <li>
                    <Link to="/add-emp" class="dropdown-item">
                      Add Emp
                    </Link>
                  </li>
                </ul>
                {/* 소메뉴 끝 */}
              </li>
              {/* emp 메뉴 끝 */}
            </ul>
          </div>
          {/* 메뉴 등록 부분 끝 */}
        </div>
      </nav>
    </div>
  );
}

export default Header;
