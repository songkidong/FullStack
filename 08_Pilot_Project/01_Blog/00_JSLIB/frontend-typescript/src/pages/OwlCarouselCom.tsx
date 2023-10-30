// OwlCarouselCom.tsx : rfce
import React, { useEffect } from "react";
import initMain from "../assets/js/initMain";
// 내가 만든 css
import "../assets/css/OwlCarouselCom.css";

function OwlCarouselCom() {
    
  useEffect(() => {
    initMain();
  }, []);

  return (
    <div>
      {/* 사용법 :
            => html : 컨텐츠1 ~ 컨텐츠n 돌아감
                <div className="owl-carousel owl-theme 클래스명">
                    <div> 컨텐츠1 </div>
                    ...
                    <div> 컨텐츠n </div>
                </div>
            => js :
                $(클래스명).owlCarousel({
                    autoplay: true,     // 자동으로 이미지가 돌아가는 설정
                    smartSpeed: 1000,   // 이미지가 변경될때 변경 속도
                    nav: true,          // 메뉴 버튼
                    items: 1,           // 화면에 보여줄 이미지
                    loop: true          // 마지막 이미지에 도달 시 첫이미지로 보이게 반복함
                })
        */}
      <div className="owl-carousel carousel-div owl-theme">
        <div className="position-relative mb-5">
          <img
            className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
            src={require("../assets/img/testimonial/testimonial-1.jpg")}
            alt=""
          />
        </div>

        <div className="position-relative mb-5">
          <img
            className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
            src={require("../assets/img/testimonial/testimonial-2.jpg")}
            alt=""
          />
        </div>

        <div className="position-relative mb-5">
          <img
            className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
            src={require("../assets/img/testimonial/testimonial-3.jpg")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default OwlCarouselCom;
