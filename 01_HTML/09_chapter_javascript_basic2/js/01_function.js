// 함수(==메서드) : js 내장함수(js 미리 만들어 놓은 함수들)
// 예) .split(), .toFixed() 등
// 함수 사용이유(why?) : 코드 재사용(코딩 생산성증가)
//                    , 코딩 라인이 짧아짐(코딩 효율성증가)

// TODO: 함수 만드는 법(함수 정의)
// TODO: 1) 함수 1st 형태(패턴)
// 사용법 : (1) 함수 정의
//      function 함수명() {
//         실행문;
// }
// (2) 함수 사용(호출)
// 함수명(); // 함수 사용(호출)

// 예제1) 안녕하세요 출력하는 함수를 정의하고 사용해 보세요
// 함수 정의 (1st형태)
// function hello() {
//     alert("안녕하세요");
// }
// 함수 사용(호출)
// hello();
// 코드 재사용 (코딩 라인이 짧아짐)
// hello();
// hello();

// 예제2) "hello world" 출력하는 함수를 작성하고 함수를 사용(호출)
// 입력 : 없음
// 출력 : hello world
// 함수 정의 (1st 형태)
// function hello(){
//    alert("hello world");
// }
// 함수 사용(호출) , 무조건 hellow world 고정됨
// 기존에 동작하던 소스가 오류가 발생할 가능성이 커짐(소스 수정 지양)
// hello();

// TODO: 2) 함수 2nd 형태(패턴), 1st 보다 효율적
// 사용법 : (1) 함수정의
//      function 함수명(매개변수, ...) {
//         실행문 = 실행문 + 매개변수; // 실행문에서 매개변수 활용
// }
// (2) 함수 사용(호출)
// 함수명(값); // 매개변수에 값을 넣으면서 사용함

// 예제3) 매개변수를 이용해서 함수를 정의하고 "안녕하세요" 출력
// 함수정의 (2nd 형태)
// function hello(params) {
//    alert(params); // 매개변수를 실행문에 활용, alret("안녕하세요")
// }
// 함수 사용(호출)
// hello("안녕하세요") // 매개변수에 값을 넣으면서 사용함(params = "안녕하세요")

// TODO: 3) 함수 3rd 형태
// 변수의 허용범위(스코프) : 항상 중괄호{} 안에서만 의미가 있음
// 사용법 : (1) 함수 정의
//      function 함수명(매개변수, ...) {
//         let 결과 = 실행문(매개변수)
//         return 결과; // 결과 내보내기(함수 밖으로)
// }
// 2) 함수 사용(호출)
// let 변수 = 함수명(매개변수);

// 예제4) 매개변수와 return이 있는 함수를 정의해서 hello world 출력
// 함수 정의 (3rd형태)
// function hello(params){
//     return params + "world"; // params + "world" : 결과 내보내기 됨
// }
// (2) 함수 사용(호출)
// let result = hello("hello"); // "hello world" 결과가 나와서 result 변수에 저장
// alert(result);

// 예제5) 어떤 수를 매개변수로 받아서 제곱을 구하는 함수를 작성
// 입력 : 없음
// 출력 : 9
// 함수 호출 : f(3)
// 함수 정의 (3rd 형태)
// function f(params) {
//     return params * params; // 제곱 결과 내보내기
// }
// 함수 사용
// let result = f(3); // f(3) 결과가 result 변수에 저장됨
// console.log(result);

// 예제6) 원의 넓이 구하기 함수를 작성
// 원의 넓이 공식 : 반지름 * 반지름 * 3.14
// 입력 : 5
// 출력 : 78.5
// let r = Number(prompt("넓이를 구할 원의 반지름"));
// function circleArea(r) {
//     return r * r * 3.14;
// }
// let result = circleArea(r);
// alert(result);

// 예제7) 원의 둘레 구하기 함수를 작성
// 원의 둘레 공식 : 2 * 반지름 * 3.14
// 입력 : 6
// 출력 : 37.68
// let r = Number(prompt("둘레를 구할 원의 반지름"));
// function circleRound(r) {
//     return r * 2 * 3.14;
// }
// let result = circleRound(r);
// alert(result);

// 예제8) 시작수, 끝수가 주어지면 시작수~끝수까지의 합계를 구하는 함수 작성
// 입력1 : 100
// 입력2 : 300
// 결과 : 40200
let num1 = Number(prompt("시작수"));
let num2 = Number(prompt("끝수"));
function sum(num1, num2){
let result = 0;
for(let i = num1; i <= num2; i++){
    result += i;
 }
 return result;
}
let result = sum(num1, num2);
alert(result);

