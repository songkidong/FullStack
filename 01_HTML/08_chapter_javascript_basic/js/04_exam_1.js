// 문제풀이
// 1) 증감연산자를 활용해서 화면 출력하세요
// 출력방법 : alert(), console.log()
// 입력 : 없음
// 출력 : 10
//        11
//        12
// let x = 10;
// alert(x);
// ++x;
// alert(x);
// ++x;
// alert(x);

// 2) 공식 : price = 1500, num = 3, pay = 10000
//    잔돈 계산 공식 = pay - price * num;
//    출력 : - 개당 가격 : 1500원
//           - 구매 개수 : 3개
//           - 지불 금액 : 10000원
//           - 거스름돈은 5500원 입니다.
// let price = 1500;
// let num = 3;
// let pay = 10000;
// let change = pay - price * num;
// alert(change);

// 출력방법 : console.log
// console.log("- 개당 가격 : " + price + "원")
// console.log("- 구매 개수 : " + num + "개")
// console.log("- 지불 금액은 : " + pay + "원")
// console.log("- 거스름돈은 " + change + "원입니다.")

// 3) 입력함수 : prompt() 이용해서 입력받기
// 아래 코딩을 완성하세요
// 입력1: a
// 입력2: b
// 출력 : b a

// 사용법 : let 변수명 = prompt("문자열"); // 문자열 (입력대화상자의 문구)
//         입력받은 글자가 변수명에 저장 됨
// let char1 = prompt("1개의 문자가 입력된다."); //a
// let char2 = prompt("1개의 문자가 입력된다.") //b

// 결과 출력
// alert(char2 + " " + char1);

// 4) 입력받은 정수를 줄을 바꿔 3번 출력한다.
// 단, 줄바꿈 특수문자를 사용해서 한번에 출력하세요
// 입력 : 3
// 출력 : 3
//        3
//        3
// let num = prompt("정수를 입력해 주세요") // 3
// alert(num + "\n" + num + "\n" + num);

// 5) 단어 2개가 입력된다.
// 2개를 거꾸로 붙여서 출력하세요
// 입력1: hello
// 입력2: worlkd
// 출력 : helloworld
// let char1 = prompt("단어를 입력해 주세요");
// let char2 = prompt("단어를 입력해 주세요");
// alert(char2 + char1);

// 6) 입력1: Hello
//    입력2: World
//    출력 : Hello
//           World
// let char1 = prompt("단어를 입력해 주세요");
// let char2 = prompt("단어를 입력해 주세요");
// alert(char1 + "\n" + char2);

// 7) 두 정수의 합을 출력하시오
// 입력1: 123
// 입력2: -123
// 출력 : 0
// 힌트 : let 변수명 = Number(prompt()) (문자열 -> 숫자)
// let num1 = Number(prompt("숫자를 입력해 주세요"));
// let num2 = Number(prompt("숫자를 입력해 주세요"));
// alert(num1 + num2);