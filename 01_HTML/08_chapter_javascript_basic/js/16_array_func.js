// 배열의 자바스크립트 내장함수들 소개
// ex) .toFixed(자리수) : 소수점 자르기 함수 등 (js 내장 함수)

// TODO: 배열 내장함수
//  1) 두 배열 합치기 함수
// 사용법 : 배열변수.concat(배열변수2);
// let nums = [1, 2, 3]; // 숫자배열
// let chars = ["a", "b", "c", "d"] // 문자배열
// let numsChars = nums.concat(chars);
// console.log("numsChars", numsChars);

// 2) 배열 내에 구분자를 이용해서 붙이기 함수
// 사용법 : 배열변수.join(구분문자열)
// let chars = ["a", "b", "c", "d"] // 문자배열
// let string1 = chars.join("/");
// // 결과 출력 : 배열 -> 구분자포함 문자열로 변경됨
// console.log("string1", string1);

// 3) push() : 새로운 값을 배열의 뒤에 추가하는 함수
// 사용법 : 배열변수.push(값, 값2 ... 값n);
// let nums = [1, 2, 3]; // 원본배열
// let result = nums.push(4, 5); // 원본배열에 4,5를 추가
// console.log("nums", nums);

// 4) pop() : 마지막 값을 꺼내서 원본배열에서 제거하는 함수
// let chars = ["a", "b", "c", "d"] // 원본배열
// chars.pop();
// console.log("chars", chars);

// 5) 기타(참고) : .push(값) (배열의 마지막에 추가)
//           .unshift(값) (배열의 앞에 추가)
//           .pop(값) (배열의 마지막값을 제거)
//           .shift(값) (배열의 처음값을 제거)

// 6) 배열의 수정
// let nums = [1, 2, 3, 4, 5];
// // 배열의 1st 값 수정 : 0
// nums[0] = 10; // 값 수정(1 -> 10)
// // 배열의 2nd 값 수정 : 1
// nums[1] = 20; // 값 수정(2 -> 20)
// console.log("nums", nums);

// 7) 배열의 복사 : 
// 사용법 : 배열변수.slice(복사할_시작인덱스번호, 복사할_끝인덱스번호);
//          [복사할_시작인덱스번호 ~ 복사할_끝인덱스번호 -1 까지 복사됨]
let colors = ["red", "green", "blue", "white", "black"];
let colors2 = colors.slice(2,4); // 인덱스번호 2 ~ 3까지 복사됨
console.log("colors2", colors2);