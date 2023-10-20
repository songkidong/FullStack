// TODO: 형제 요소(태그)
// 선택함수 : li 태그 중 class=two 인것
// 사용법 : document.querySelector(css선택자)
let liTag = document.querySelector(".two");

// TODO: 사용법 : 태그.previousElementSibling;
// TODO: 태그의 앞에 있는 형제 요소(태그) 접근
let siblingPre = liTag.previousElementSibling.innerHTML;
// 출력
console.log("siblingPre", siblingPre);
// TODO: 사용법 : 태그.nextElementSibling;
// TODO: 태그의 뒤에 있는 형제 요소(태그) 접근
let siblingNext = liTag.nextElementSibling.innerHTML;
// 출력
console.log("siblingNext", siblingNext);