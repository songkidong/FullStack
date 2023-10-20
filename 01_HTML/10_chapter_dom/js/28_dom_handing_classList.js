// TODO: 클래스 리스트 조작
// 선택함수 : #content 선택
let content = document.querySelector("#content"); // div 태그

// TODO: 빨간색 클래스 추가
// .red css 클래스를 div 태그에 추가
// 사용법 : 태그.classList.add("클래스명");
content.classList.add("red");

// TODO: 빨간색 -> 하늘색 교체
// 사용법 : 태그.classList.replace("원클래스", "바꿀클래스")
content.classList.replace("red", "skyblue");

// TODO: 하늘색 클래스 삭제
// 사용법 : 태그.classList.remove("삭제할클래스")
content.classList.remove("skyblue");

// TODO: 클래스 있는지 확인(있으면 true, 없으면 false) : contain()
// 사용법 : 태그.classList.contains("있는지확인할클래스")
let bResult = content.classList.contains("skyblue");
// 출력
console.log("bResult", bResult); // false

// TODO: 클래스가 있으면 삭제, 없으면 추가 : toggle()
// 사용법 : 태그.classList.toggle("토글할클래스");
content.classList.toggle("skyblue"); // 추가가 됨