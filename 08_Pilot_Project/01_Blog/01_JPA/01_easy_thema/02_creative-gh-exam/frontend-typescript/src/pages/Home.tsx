// Home.tsx :rfce
import React, { useEffect, useState } from "react";
import initMain from "../assets/js/scripts";

// 테마 styles.css import
import "../assets/css/styles.css";
// todo: simplelightbox css import
import "simplelightbox/dist/simple-lightbox.css";
import DeptList from "./basic/dept/DeptList";
import AddDept from "./basic/dept/AddDept";
import CustomerList from "./basic/customer/CustomerList";
import AddCustomer from "./basic/customer/AddCustomer";
import Dept from "./basic/dept/Dept";

function Home() {
  // 바인딩 변수
  // 화면값을 저장할 변수
  const [viewName, setViewName] = useState<string>("");
  // 기본키를 저장할 변수
  const [pid, setPid] = useState<number>(0);

  // scripts.js 함수 실행 : 화면이 뜰때
  useEffect(() => {
    initMain();
  }, []);

  // todo: 함수 정의
  // 화면값을 저장할 변수 : 클릭시
  const handleChange = (viewName: string, pid = 0) => {
    setViewName(viewName); // 화면명 저장
    setPid(pid); // 기본키 저장
  };

  //    화면을 선택해서 출력하는 함수
  const changeView = () => {
    if (viewName === "deptList") {
      // props : 자식쪽으로 함수(handleChange) 전달
      return <DeptList handleChange = {handleChange} />;
    } else if (viewName === "addDept") {
      return <AddDept />;
    } else if(viewName === "dept") {
      // props : 자식쪽으로 변수(dno) 전달
      return <Dept dno= {pid} />
    } else if (viewName === "customerList") {
      return <CustomerList />;
    } else if (viewName === "addCustomer") {
      return <AddCustomer />;
    } 
  };

  return (
    <div id="page-top">
      {/* <!-- Navigation--> */}
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top py-3"
        id="mainNav"
      >
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#page-top">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Masthead--> */}
      <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold">
                Simple Coding - Exam
              </h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 mb-5">
                안녕하세요 저의 블로그에 오신것을 환영합니다.
              </p>
              <a className="btn btn-primary btn-xl" href="#about">
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- About--> */}
      <section className="page-section bg-primary" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">We've got what you need!</h2>
              <hr className="divider divider-light" />
              <p className="text-white-75 mb-4">
                Start Bootstrap has everything you need to get your new website
                up and running in no time! Choose one of our open source, free
                to download, and easy to use themes! No strings attached!
              </p>
              <a className="btn btn-light btn-xl" href="#services">
                Get Started!
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Services--> */}
      <section className="page-section" id="services">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center mt-0">포트폴리오 화면</h2>
          <hr className="divider" />
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-gem fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Sturdy Themes</h3>
                <p className="text-muted mb-0">
                  Our themes are updated regularly to keep them bug free!
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-laptop fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Up to Date</h3>
                <p className="text-muted mb-0">
                  All dependencies are kept current to keep things fresh.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-globe fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Ready to Publish</h3>
                <p className="text-muted mb-0">
                  You can use this design as is, or you can make changes!
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-heart fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Made with Love</h3>
                <p className="text-muted mb-0">
                  Is it really open source if it's not made with love?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Portfolio--> */}
      {/* todo: 라이트 박스 시작 */}
      <div id="portfolio">
        <div className="container-fluid p-0">
          <div className="row g-0">
            {/* 1st 이미지 시작 */}
            <div className="col-lg-4 col-sm-6">
              {/* 라이트 박스 소스 부분 */}
              <a
                className="portfolio-box"
                href={require("../assets/img/portfolio/fullsize/1.jpg")}
                title="Project Name"
              >
                <img
                  className="img-fluid"
                  src={require("../assets/img/portfolio/thumbnails/1.jpg")}
                  alt="..."
                />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                    React & Springboot & Oracle
                  </div>
                  <div className="project-name">부서 게시판 예제</div>
                </div>
              </a>

              {/* 메뉴 추가 */}
              <div className="text-center">
                <a href="#portfolio-result">
                  <span
                    className="badge rounded-pill text-bg-dark"
                    onClick={() => handleChange("deptList")}
                  >
                    부서조회
                  </span>
                </a>
                &nbsp;&nbsp;
                <a href="#portfolio-result">
                  <span
                    className="badge rounded-pill text-bg-primary"
                    onClick={() => handleChange("addDept")}
                  >
                    부서추가
                  </span>
                </a>
              </div>
            </div>
            {/* 1st 이미지 끝 */}

            {/* 2nd 이미지 시작 */}
            <div className="col-lg-4 col-sm-6">
              {/* 라이트 박스 */}
              <a
                className="portfolio-box"
                href={require("../assets/img/portfolio/fullsize/2.jpg")}
                title="Project Name"
              >
                <img
                  className="img-fluid"
                  src={require("../assets/img/portfolio/thumbnails/2.jpg")}
                  alt="..."
                />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">Project Name</div>
                </div>
              </a>
              {/* 메뉴 추가 */}
              <div className="text-center">
                <a href="#portfolio-result">
                  <span
                    className="badge rounded-pill text-bg-dark"
                    onClick={() => handleChange("customerList")}
                  >
                    고객조회
                  </span>
                </a>
                &nbsp;&nbsp;
                <a href="#portfolio-result">
                  <span
                    className="badge rounded-pill text-bg-primary"
                    onClick={() => handleChange("addCustomer")}
                  >
                    고객추가
                  </span>
                </a>
              </div>
            </div>
            {/* 2nd 이미지 끝 */}

            {/* 3rd 이미지 시작 */}
            <div className="col-lg-4 col-sm-6">
              <a
                className="portfolio-box"
                href={require("../assets/img/portfolio/fullsize/3.jpg")}
                title="Project Name"
              >
                <img
                  className="img-fluid"
                  src={require("../assets/img/portfolio/thumbnails/3.jpg")}
                  alt="..."
                />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">Project Name</div>
                </div>
              </a>
            </div>
            {/* 3rd 이미지 끝 */}
          </div>
        </div>
      </div>
      {/* todo: 라이트 박스 끝 */}

      {/* 여기 */}
      {/* todo: 게시판 결과 시작 */}
      <div className="container" id="portfolio-result">
        <div className="container-fluid p-0">
          {/* 게시판 */}
          <div className="row mb-5">
            <div className="col-lg-12 mt-5">
              <div className="row gx-0">
                <div className="col-lg-12">{changeView()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* todo: 게시판 결과 끝 */}

      {/* <!-- Call to action--> */}
      <section className="page-section bg-dark text-white">
        <div className="container px-4 px-lg-5 text-center">
          <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
          <a
            className="btn btn-light btn-xl"
            href="https://startbootstrap.com/theme/creative/"
          >
            Download Now!
          </a>
        </div>
      </section>
      {/* <!-- Contact--> */}
      <section className="page-section" id="contact">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 col-xl-6 text-center">
              <h2 className="mt-0">Let's Get In Touch!</h2>
              <hr className="divider" />
              <p className="text-muted mb-5">
                Ready to start your next project with us? Send us a messages and
                we will get back to you as soon as possible!
              </p>
            </div>
          </div>
          <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
            <div className="col-lg-6"></div>
          </div>
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-4 text-center mb-5 mb-lg-0">
              <i className="bi-phone fs-2 mb-3 text-muted"></i>
              <div>+1 (555) 123-4567</div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer--> */}
      <footer className="bg-light py-5">
        <div className="container px-4 px-lg-5">
          <div className="small text-center text-muted">
            Copyright &copy; 2023 - Company Name
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
