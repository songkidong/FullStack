// form input 태그 접근해서 디자인 적용
$(function() {
    // 1) 사용법 : 태그[속성] (속성선택자) : 해당되는 속성이 있는 태그를 선택
    $("#wrap a[target]").css({color: "red"});

    // 2) 속성의 값 중 https로 시작되는(^) 태그 선택
    $("#wrap a[href^=https]").css({color: "skyblue"});

    // 3) 속성의 값 중 google이 포함되는(*) 태그 선택
    $("#wrap a[href*=google]").css({color: "yellow"});

    // 4) 속성의 값 중 net 로 끝되는($) 태그 선택
    $("#wrap a[href$=net]").css({color: "blue"});

});