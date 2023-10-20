// 함수 정의
function get_pay(price, discount, shipping) {
    let pay = price - ((price) * (discount/100)) + shipping;

    // 각각 웹 화면에 출력하기
    // 선택함수 이용
    document.querySelector("#price").innerHTML = price + "원"; // 25000
    document.querySelector("#discount").innerHTML = discount + "원"; // 10
    document.querySelector("#shipping").innerHTML = shipping + "원"; // 500
    document.querySelector("#pay").innerHTML = pay + "원";
}

// 2시간 : 포트폴리오 평가 (홈페이지 만들기)
// 문제풀이 시나리오 평가 : 자바스크립트 기본 문제 5개(1시간)
// ppt 양식: 문제해결 시나리오 풀이
// 문제1)
// 1) 함수 get_pay 함수를 정의한다.
// 2) 공식 pay(지불금액) = price(책값) - (price(책값) * (discount(할인율)/100)) + shipping;
// 적용해서 pay 변수에 넣는다.
// 3) 각각의 값을(pay, price, discount, shipping) 화면에 div 출력한다.