// 02_exam/index_es6.js
// TODO: 아래 지시사항대로 코딩하고, 함수를 가져와서 출력
// 변수 val 의 문자열 길이가 홀수이면 ending() 함수를 실행
// 입력 : x
// 사용법 : import 함수명 from"경로/파일명";
// TODO: import 하세요
import ending from"../02_exam/var_es6.js";

let val = "greetings";

// TODO: val의 문자열길이가 홀수인지 판단하여 홀수이면 ending() 실행
if(val.length % 2 !== 0) {
    ending(); // 함수 실행(호출, 사용)
} 