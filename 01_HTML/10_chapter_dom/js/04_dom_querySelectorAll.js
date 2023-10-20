// DOM 접근(선택) 함수 : querySelectorAll(css선택자)
// html 문서에서(DOM) 여러개를 선택하는 함수
// 사용법 : let 변수명 = document.querySelectorAll(css선택자);
let elements = document.querySelectorAll("ul li"); // 여러개 li(배열)

// li 태그 여러개 : 반복문
for(let i = 0; i < elements.length; i++) {
    console.log(elements); // elements 요소 검사
    // 결과 출력 : id ="output" 위치에 출력
    document.querySelector("#output")
    // 문자열 붙이기
    .innerHTML += elements[i].innerHTML;
    // 줄바꿈
    // innerHTML(==문자열) : <여는태그>문자열<닫는태그>
    document.querySelector("#output").innerHTML += "<br/>";
}