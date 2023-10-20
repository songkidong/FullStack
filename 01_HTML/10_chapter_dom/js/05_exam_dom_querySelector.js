// 연습문제1)
// h1 태그 1개만 선택해서 아래와 같이 변경하세요
// style.color = "orange"
// style.background = "red"
// innerHTML = "From Javascript"
// let header = document.querySelector("h1");
// header.style.color = "orange";
// header.style.backgroundColor = "red";
// header.innerHTML ="From Javascript";

// 2) h1 태그 모두 선택해서 아래와 같이 조작하세요
// style.color = "orange"
// style.background = "red"
// innerHTML = "From JavaScript"
let headers = document.querySelectorAll("h1");
for(i = 0; i < headers.length; i++) {
    headers[i].style.color = "orange";
    headers[i].style.backgroundColor = "red";
    headers[i].innerHTML = "From Javascript";
}