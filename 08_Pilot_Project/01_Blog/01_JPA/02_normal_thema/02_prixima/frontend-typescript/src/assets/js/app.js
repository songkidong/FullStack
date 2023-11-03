// $(document).ready(function () : 화면이 뜰때 실행되는 이벤트함수(useEffect())

/* eslint-disable */
export default function initMain() {
  // 여기
  //Owl 캐러셀 1
  $(".hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: false, // 하단에 ... 이동 메뉴 없앰
    navText: ["PREV", "NEXT"], // 메뉴명 PREV, NEXT
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 7000,  // 오토플레이가 실행될때 시간 : 7초
    responsive: {      // 반응형 : 0 ~ 765화면(핸드폰/테블릿) : 메뉴(nav) 없음
      0: {             //         768 화면(pc) : 메뉴(nav) 있음
        nav: false,
      },
      768: {
        nav: true,
      },
    },
  });

  // 캐러셀 2
  $("#projects-slider").owlCarousel({
    loop: true,
    nav: false,
    items: 2,
    dots: true,
    smartSpeed: 600,
    center: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
        margin: 8,
      },
    },
  });

  // 캐러셀 3
  $(".reviews-slider").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 900,
    items: 1,
    margin: 24,
    autoplay: true,
    autoplayTimeout: 4000,
  });
}
