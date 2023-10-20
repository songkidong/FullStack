// 시계 예제 : 계속 시간이 흘러가는 예제
// 선택 함수 : #clock (h1)
let clock = document.querySelector("#clock"); // h1 태그

// 사용법 : setInterval(함수(), 밀리초)
// 계속 몇초마다 코드를 반복 실행하는 함수
setInterval(function(){
    // 반복할 코딩 : 시간
    let now = new Date();
    clock.innerHTML = now; // 시간을 h1 태그에 출력
}, 1000); // 1초마다 함수() 반복 실행
