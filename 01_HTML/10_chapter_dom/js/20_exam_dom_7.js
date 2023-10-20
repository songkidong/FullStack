// 선택 함수
// img 선택
let cup = document.querySelector("#cup");

// 클릭 이벤트 함수
// js 선택함수 이용해서 태그에 접근가능 : img태그
function changePic(){
    // 이미지 바꾸기 코딩 : "./img/cup-1.png" -> "./img/cup-2.png"
    cup.src = "./img/cup-2.png";
}