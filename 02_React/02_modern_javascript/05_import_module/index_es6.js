// index_es6.js
// import 받을 js파일
// import : 기능(변수/함수)를 다른 js파일에서 가져오기
// 사용법 : import {변수명,함수명} from"js파일경로/파일명";
import {odd, even, hello} from"./var_es6.js";

// 예제 : 값이 홀수인지 짝수인지 판단하기
let num = 3; // 기본값

// 짝수
if(num % 2 == 0) {
    console.log(even); // 짝수입니다. 출력
    hello(); // 다른 js에 정의된 함수 실행 : 안녕하세요
} else {
    console.log(odd); // 홀수입니다. 출력
    hello(); // 다른 js에 정의된 함수 실행 : 안녕하세요
}
