// spread(스프레드 연산자) 연산자
// 리액트 많이 나옴 : 배열의 복사본을 이용해서 코딩
// 1) 배열의 복사 : 원본을 훼손하지 않음
// 사용법 : ...배열변수; // 배열값을 복사함
// 예제1)
// let arr1 = [1, 2, 3, 4, 5];
// // [1,2,3,4,5,6,7,8,9]
// let arr2 = [...arr1, 6, 7, 8, 9]
// console.log(arr2);

// 예제2)
// let str1 = "paper block";
// let str2 = [...str1];
// console.log(str2); // ["p","a","p","e",...]

// 예제3) 배열 2개 붙이기
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr = [...arr1, ...arr2];
// console.log(arr); // [1,2,3,4,5,6]

// 향상된 for문 : 인덱스번호 자동증가
// arr 배열의 끝까지 인덱스번호를 1씩 자동으로 증가시키면서 반복함
// let arr = [1,2,3,4,5,6];
// console.log("일반");
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// console.log("향상")
// for (const e of arr) {
//     console.log(e); // e : 배열의 값
// }

// 2) 함수에서의 스프레드 연산자 사용 예
// 2-1) 함수 매개변수 : rest 연산자(==스프레드 연산자)
// 용도 : 매개변수들을 모두 더해서 합계를 구하는 함수
function add(...rest) {
    let sum = 0;
    // 향상된 for문
    for (const item of rest) {
        sum += item; // item == 배열(매개변수들)의 값
    }
    return sum;
}
console.log(add(1)); // 1
console.log(add(1,2)); // 3
console.log(add(1,2,3)); // 6

// 2-2) js 내장 함수에서의 스프레드 연산자 응용
// 아래에서 최소값 구하세요
let numbers = [9,4,7,1];
let result = Math.min(...numbers); // 1
console.log(result);

// 3) 객체에서의 스프레드 연산자 사용
// TODO: 객체의 속성이 없으면 추가되고, 있으면 수정됨
let currentState = {
    name: "철수",
    species: "human"
}
// 사용법 : ...객체변수
// 객체 속성 추가
currentState = {...currentState, age: 10};
console.log(currentState);

// 객체 속성 수정
currentState = {...currentState, age: 12};
console.log(currentState);