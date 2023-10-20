// map 함수 (리액트에서 반복문 대용으로 사용함)
// 용도 : 배열을 조작해서 새로운 복사본 배열을 만들때 사용
// 특징 : 1) 리턴값
// 사용법 : let 변수 = 배열변수.map((value) => {반복문})
// 예제1) 숫자배열에서 제곱수를 구하는 새로운 배열을 만드세요
// let numbers = [1,2,3,4,5];
// let result = numbers.map((value) => value * value);
// console.log(result); // [1,4,9,16,25]

// 예제2) map함수에 js 내장함수 사용하기
// 주어진 배열의 제곱근 구해서 새로운 배열을 만드세요
// Math.sqrt(값) : 제곱근을 구하는 js 내장함수
// let numbers = [1,2,3,4,5];
// let result = numbers.map(Math.sqrt);
// console.log(result);

// (참고 : 숫자배열)
// 입력 : 1 2 4
// let num = prompt("숫자배열").split(" ").map(Number);

// 연습문제 1) 아래 주어진 배열을 map이용해서 조작하세요
// 결과 : [2,4,6]
// let numbers = [1,2,3];
// let result = numbers.map((value) => (value * 2));
// console.log(result);

// 예제 : 객체 조작
// 객체배열에서 나이만 뽑아서 새로운 배열 만들기
// let users = [
//     {name:'YD', age:22},
//     {name:'Bill', age:32},
//     {name:'Andy', age:21},
//     {name:'Roky', age:35}
// ];
// let ages = users.map((value)=>value.age);
// console.log(ages);

// 연습문제 2) map() 함수 사용해서 새로운 배열을 만드세요
// 결과 : ["가!", "나!", "다!"]
let chars = ["가", "나", "다"];
let result = chars.map((value) => value + "!");
console.log(result);