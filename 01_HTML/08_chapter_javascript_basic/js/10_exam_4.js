// 1) for문 사용해서 1 ~ 100까지 출력하기
// for(let i = 1; i <=100; i++) {
//     console.log(i);
// }

// 2) 1 ~ n까지 출력하기
// 입력예시 : 5
// 출력예시 : 1 2 3 4 5
// let num = Number(prompt(""));
// let result = "";
// for(let i = 1; i <= num; i++) {
//     result = result + i + " ";
// }
// alert(result);

// 3) a ~ b까지 출력하기
// 입력예시1 : 8
// 입력예시2 : 3
// 출력예시 : 3 4 5 6 7 8
// for(시작값; 시작값<=끝값; 증감식){}
// let num1 = Number(prompt("시작 숫자"));
// let num2 = Number(prompt("끝 숫자"));

// let maxNum = Math.max(num1, num2); // 큰값
// let minNum = Math.min(num1, num2); // 작은값

// let result = ""; // 문자열 붙이기 변수

// for(let i = minNum; i <= maxNum; i++) {
//     // 문자열 붙이기 : 문자열 + 숫자 -> 문자열(자동 자료형변환)
//     result = result + i + " ";
// }
// alert(result);

// 4) 별 출력하기
// 입력 : 5
// 출력 : *****
// let num = Number(prompt(""));
// let result = "";
// for(let i = 1; i <= num; i++){
//     result = result + "*";
// }
// alert(result);

// 5) 1 ~ 10 까지 합계를 구해서 아래와 같이 화면에 출력
// 출력 : "1 ~ 10의 합계 : 55"
// TODO: 누적합 문제
// 누적합을 위한 임시 변수
// let sumVal = 0;
// for(let i = 1; i <= 10; i++){
//     sumVal = sumVal + i;
// }
// alert("1 ~ 10의 합계 : " + sumVal);