// filter 함수
// 함수의 조건이 참인 것만 뽑아서 몇개만 새로운 배열을 만듬
// 원본배열보다 개수가 작음
// 특징: 리턴값 있음
// 예제1) 아래 배열에서 3보다 큰수만 뽑아서 새로운 배열을 만드세요
// let numbers = [1,2,3,4,5];
// let result = numbers.filter((value) => value > 3);
// console.log(result);

// 예제2) 객체 조작
// 돈이 300000 초과한 사람만 뽑아서 새로운 배열로 만드세요
// let guys = [
//     {name:"YD", money:500000},
//     {name:"Bill", money:400000},
//     {name:"Andy", money:300000},
//     {name:"Roky", money:200000}
// ]
// let rich = guys.filter((guy) => guy.money > 300000);
// console.log(rich);

// 연습문제1) filter 함수 사용해서 조작하세요
// 결과 : [1,2]
let numbers = [1,2,3,4,5];
let result = numbers.filter((value) => value < 3);
console.log(result);

// 연습문제2) filter 함수 사용해서 조작하세요
// 결과 : [3]
let result2 = numbers.filter((value) => value > 2 && value < 4);
console.log(result2);