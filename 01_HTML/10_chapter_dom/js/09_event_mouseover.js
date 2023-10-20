// js 함수 정의
// 클릭 함수
function changeText(evnet) {
    // event.target == 현재 클릭한 태그
    // 클릭하면 문자열 변경 : 클릭해보세요! -> 클릭하셨네요!
    event.target.innerHTML = "클릭하셨네요!";
}

// 마우스 위로 함수 : 배경색을 변경(오렌지)
function mouseOver(event) {
    // event.target == 현재 마우스 위로 올라간 태그(div)
    event.target.style.backgroundColor = "orange";
}

// 마우스 나갔을때 함수 : 배경색을 변경(하늘색)
function mouseOut(event) {
    // event.target == 현재 마우스 위로 올라간 태그(div)
    event.target.style.backgroundColor = "skyblue";
}