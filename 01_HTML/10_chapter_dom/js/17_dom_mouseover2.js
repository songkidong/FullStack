// 도형 조작
// 선택 함수 : #rect
let myRect = document.querySelector("#rect"); // div 태그

// 마우스 위로 이벤트 함수 : onmouseover = "함수명()"
// .addEventListener("mouseover", function(){})
myRect.addEventListener("mouseover", function(){
    // 마우스가 위로 올라가면 함수 실행
    // 배경색 : 녹색, 둥근 사각형 : 50%
    myRect.style.backgroundColor = "green";
    myRect.style.borderRadius = "50%";
})
// 마우스가 밖으로 나가면 함수 : onmouseout = "함수명()"
myRect.addEventListener("mouseout", function(){
    // 마우스가 밖으로 나가면 함수 실행
    // 원상복구 : 배경색 : "", 둥근사각형 : ""
    myRect.style.backgroundColor = "";
    myRect.style.borderRadius = "";
})