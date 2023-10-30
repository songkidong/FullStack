// OwlCarouselComExam.tsx : rfce
import React, { useEffect } from "react";
import initMain from "../assets/js/initMain";

function OwlCarouselComExam() {

    useEffect(() => {
        initMain();
      }, []);

  return (
    <div>
      {/* <!-- ../assets/img/gallery/thumb/01.jpg ~ ../assets/img/gallery/thumb/06.jpg 까지 캐러셀을 구현하세요. --> */}
      {/* <!-- gallery 이미지 6개를 사용해 화면에 기본 2개를 보여주고, 이미지가 계속 돌아가게 하세요. --> */}
      <div className="owl-carousel carousel-div-exam owl-theme">
        <div className="position-relative mb-5">
          <img
            className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
            src={require("../assets/img/gallery/thumb/01.jpg")}
            alt=""
          />
        </div>
        <div className="position-relative mb-5">
          <img
            className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
            src={require("../assets/img/gallery/thumb/02.jpg")}
            alt=""
          />
        </div>
        <div className="position-relative mb-5">
          <img
            className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
            src={require("../assets/img/gallery/thumb/03.jpg")}
            alt=""
          />
        </div>
        <div className="position-relative mb-5">
          <img
            className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
            src={require("../assets/img/gallery/thumb/04.jpg")}
            alt=""
          />
        </div>
        <div className="position-relative mb-5">
          <img
            className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
            src={require("../assets/img/gallery/thumb/05.jpg")}
            alt=""
          />
        </div>
        <div className="position-relative mb-5">
          <img
            className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
            src={require("../assets/img/gallery/thumb/06.jpg")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default OwlCarouselComExam;
