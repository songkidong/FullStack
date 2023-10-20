// 반복문 : for문(80%)
// 왜? 같은 명령문을 많은 횟수를 출력하고 싶을 때 사용
// 사용법 : 초기값을 조건식에 판단해서 참이면 반복하고,
//          거짓이면 중단
// for(초기값; 조건식; 증감식){
//    반복문(문장);
// }

// 예제) 반복문을 사용하여 안녕하세요를 3번 출력하세요.
// for(let k = 0; k < 3; k++){
//     alert("안녕하세요");
// }

// TODO: 자주 나오는 코딩 3가지 패턴 : 꼭 기억할 것
// TODO: 1) 카운팅 : 1씩 증가시키기
// 예제) count 변수가 1부터 10까지 1씩 증가하는 코드를 작성하세요.
// let count = 0;
// for(let i = 1; i <= 10; i++){
//     count = count + 1; // 카운팅 코드
// }
// alert(count);

// TODO: 2) 누적합
// 예제) 1 ~ 10 까지 모든 숫자를 더해서 최종 결과를 출력하세요.
// let count = 0;
// let sumVal = 0; // 누적된 값을 저장할 변수
// for(let i = 1; i<= 10; i++){
//     count = count + 1;
//     sumVal = sumVal + count; // 누적합 코드
// }
// alert(sumVal);

// TODO: 3) 문자열 붙이기
// 예제 : 반복문을 사용해 ********** 를 화면에 출력하세요
// let strCount = ""; // 빈문자열("")로 초기화
// for(let i = 1; i<= 10; i++){
//     strCount = strCount + "*";
// }
// alert(strCount);

// 연습) 아래 결과 처럼 별 출력하기
// *
// **
// ***
// ****
// *****

// let strCount = "";
// for(let i = 1; i <= 5; i++){
//     strCount = strCount + "*";
//     console.log(strCount);
// }