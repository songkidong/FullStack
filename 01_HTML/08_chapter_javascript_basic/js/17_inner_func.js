// 자바스크립트 유용한 내장함수들 소개
// TODO: 1) .toFixed() : 소수점 자르기 함수
// 사용법 : 변수명.toFixed(자리수)
// let x = 12.4769;
// console.log(x.toFixed(2));

// TODO: 2) 문자열 -> 숫자로 바꾸기 함수
// let x = "10.33"; // 숫자로 된 문자열
// console.log(Number(x)); // 문자열 -> 숫자
// console.log(parseInt(x)); // 문자열 -> 정수
// console.log(parseFloat(x)); // 문자열 -> 실수

// 참고 : 이렇게 사용하지 말기
// let x = "apple";
// NaN 에러발생 : (Not a Number)
// console.log(Number(x)); // 에러발생(숫자로 변경불가)

// TODO: 3) 배열을 요소(원소) 모두 문자열로 변경하기
// 사용법 : 배열변수.toString()
// let animals = ["사자", "호랑이", "사슴", "펭귄"];
// // 문자열로 변경
// let str = animals.toString();
// console.log("str", str);

// 참고 : 자료형 확인 함수 : typeof(변수명)
// console.log(typeof(str));

// TODO: 4) 배열의 길이 : 배열변수.length (반복문에 많이 사용)
// let animals = ["사자", "호랑이", "사슴", "펭귄"];
// console.log("animals.length", animals.length);

// TODO: 5) 배열 정렬 함수 : 오름차순, 내림차순
// 문자열 대상 정렬
// let animals = ["사자", "호랑이", "사슴", "펭귄"];
// animals.sort() // 오름차순 정렬
// console.log("animals", animals);

// 배열 뒤집기 : 원본 배열 뒤집어서 출력
// animals.reverse();
// console.log("animals", animals);

// TODO: 6) 문자열 자르기 함수
// 사용법 : 문자열.substring(시작인덱스번호, 끝인덱스번호);
//         (시작인덱스번호 ~ 끝인덱스번호 -1 까지 잘림)
// let str = "태산이 무너져도 솟아날 구멍이 있다.";
// 9, 10, 11까지 보임
// console.log("str.substring", str.substring(9,12)); 

// TODO: 7) 문자열 바꾸기 함수
// 사용법 : 문자열.replace(/대상문자/g, "바꿀문자");
// let str = "A friend in need is a friend indeed.";
// let str2 = str.replace(/friend/g, "family");
// console.log("str2", str2);

// TODO: 8) 대소문자 바꾸기 함수
// 사용법(대문자) : 문자열.toUpperCase();
// 사용법(소문자) : 문자열.toLowerCase();
// let str = "Have a nice Day!";

// let str2 = str.toUpperCase(); // 대문자 바꾸기
// console.log("str2", str2);

// let str3 = str.toLowerCase(); // 소문자 바꾸기
// console.log("str3", str3);

// TODO: 9) 문자열 자르기 : split(구분자)
// 사용법 : 문자열.split(자를문자)
// 결과 : 배열로 내보내기 됨
// let str = "2025 3 25";
// let arr = str.split(" "); // 공백으로 자르기
// console.log("arr[0]", arr[0]);
// console.log("arr[1]", arr[1]);
// console.log("arr[2]", arr[2]);

// TODO: 10) 수학 함수
// 반올림(첫째자리)
// 사용법 : Math.round(실수) -> 반올림 된 정수
// console.log("Math.round", Math.round(5.3));
// console.log("Math.round", Math.round(5.7));

// 올림(첫째자리), ceil(천장)
// 사용법 : Math.ceil(실수) -> 올림 정수
// console.log("Math.ceil", Math.ceil(5.3));

// 내림(첫째자리), floor(바닥)
// 사용법 : Math.floor(실수) -> 내림 정수
// console.log("Math.floor", Math.floor(5.3));

// 절대값 : 음수 -> 양수
// 사용법 : Math.abs(음수) -> 양수
// console.log("Math.abs", Math.abs(-3.7));

// 최소값 :
// 사용법 : Math.min(값, 값2, ... 값n) -> 최소값
// console.log("Math.min", Math.min(0, 3, -5, 12));

// 최대값 :
// 사용법 : Math.max(값, 값2, ... 값n) -> 최대값
// console.log("Math.max", Math.max(0, 3, -5, 12));

// 제곱 : 
// 사용법 : Math.pow(숫자, 제곱수)
// console.log("Math.pow", Math.pow(2,4));

// 제곱근 : 
// 사용법 : Math.sqrt(숫자)
// console.log("Math.sqrt", Math.sqrt(25));

// TODO: 11) 날짜 함수들
let date = new Date(); // 현재 날짜(년, 월 , 일, 시, 분, 초);
let year = date.getFullYear(); // 년도
let month = date.getMonth()+1; // 월 (0(1월) ~ 11(12월))
let day = date.getDate(); // 일
console.log("year", year);
console.log("month", month);
console.log("day", day);

let hour = date.getHours(); // 시
let minute = date.getMinutes(); // 분
let second = date.getSeconds(); // 초
console.log("hour", hour);
console.log("minute", minute);
console.log("second", second);