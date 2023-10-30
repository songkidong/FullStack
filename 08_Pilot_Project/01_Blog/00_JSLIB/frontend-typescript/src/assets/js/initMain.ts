// initMain.ts
// todo: typed.js import
import Typed from "typed.js";
// todo: wowjs import
import { WOW } from "wowjs";
// todo: simplelightbox import
import SimpleLightbox from "simplelightbox";

export default function initMain() {
    // todo: 1) countup lib 사용
    // todo: 사용법 : $(선택자).counterUp({옵션설정});
    // todo: jquery 타입 무시 : ($(선택자) as any)
    ($('[data-toggle="counter-up"]') as any).counterUp({
        delay: 10,
        time: 2000
    });

    // todo: 1-1) 연습 counterup lib
    // 연습1) 1,234,567.00 줄바꿈, 1.99 줄바꿈, 12345 줄바꿈 화면 카운팅하세요
    ($('.counter') as any).counterUp({
        delay: 10,
        time: 2000
    });

    // todo: 2)  typed.js lib 
    // 사용법 : 
    //     => html : <span id="변수명"></span>
    //     => js : new Typed(#변수명, {옵션})

    let typed1 = document.querySelector("#typed1");

    // typed1 있으면 타이핑 객체 생성
    if(typed1 != null) {
        new Typed("#typed1", {
            // 타이핑 대상 글자 : strings: ["화면표시1",...,"화면표시n"]
            strings: ["원하는 글씨를", "순서대로", "출력해 줍니다."],
            typeSpeed: 100, // 타이핑 되는 속도
            backSpeed: 100, // 지워지는 속도
            cursorChar: "_",
            loop: true,     // 글자 순환          
        })
    }

    // todo: 2-1) 연습  typed.js lib 
    // ["안녕하세요", "또 만납시다.", "잘가세요."]
    // <!-- backSpeed: 0, typeSpeed: 0 으로 사용해 보세요
    let typedExam = document.querySelector("#typedExam");

    // typedExam 있으면 타이핑 객체 생성
    if(typedExam != null) {
        new Typed("#typedExam", {
            // 타이핑 대상 글자 : strings: ["화면표시1",...,"화면표시n"]
            strings: ["안녕하세요", "또 만납시다.", "잘가세요."],
            typeSpeed: 0, // 타이핑 되는 속도
            backSpeed: 0, // 지워지는 속도
            cursorChar: "_",
            loop: true,     // 글자 순환          
        })
    }

    // todo: 3) wowjs 
    // 사용법 : new WOW().init()
    new WOW().init();

    // todo: 4) SimpleLightbox
    new SimpleLightbox(".portfolio a");

    // todo: 4-1) 연습 SimpleLightbox
    new SimpleLightbox(".gallery a");

    // todo: 5) owl-carousel
    // 사용법 : $(선택자).owlCarousel({옵션});
    $(".carousel-div").owlCarousel({
        // 옵션
        autoplay: true,
        smartSpeed: 1000,
        nav: true,
        items: 1,
        loop: true,
    });

    // todo: 5-1) 연습 owl-carousel
    $(".carousel-div-exam").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        nav: true,
        items: 2,   // 화면에 보여줄 이미지 개수
        loop: true,
    });
}