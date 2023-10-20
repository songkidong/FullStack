// 문제
// 1) 입력된 단어를 입력된 횟수만큼 반복해 출력하세요.
// 입력1: love
// 입력2: 3
// 출력 : lovelovelove
// 입력함수 : let char = prompt("1개의 문자열이 입력된다.")
//            let num = Number(prompt("1개의 숫자가 입력된다."))
// let char = prompt("1개의 문자열이 입력된다.")
// let num = Number(prompt("1개의 숫자가 입력된다."))
// let strCount = "";

// for(let i = 0; i < num; i++){
//     strCount = strCount + char
// }
// alert(strCount);


// 2) 입력 : 없음
//    출력 : "!@#$%^&*()"
// alert('"!@#$%^&*()"')

// 3) 입력 : 없음
//    출력 : "C:\Download\hello.cpp"
// 힌트 : 특수문자 출력방법 : \\
// alert('"C:\\Download\\hello.cpp"')

// 4) 입력 : 1.414213
//    출력 : 1.414213
// let num = Number(prompt(""));
// alert(num);

// 5) 입력 : 1.59254
//    출력 : 1.59
// 힌트 : 소수점 자르기 함수 : 숫자.toFixed(자를자리수)
// let num = Number(prompt(""));
// alert(num.toFixed(2));

// 6) 입력 : 125
//    출력 : 125 125 125
// let num = Number(prompt(""));
// let strCount ="";
// for(let i = 0; i < 3; i++){
//     strCount = strCount + " " + num;
// }
// alert(strCount);

// 자료형 : 배열
// 자료형 : 문자열(string), 숫자(number), 참/거짓(boolean/bool), 배열
// 변수 : 변하는 값을 저장하는 장소(1가지 값만 저장함), let 변수명
// 배열 : 여러가지 값을 저장하는 장소, 변수명 동일하게 사용
// 사용법 : 변수명[인덱스번호]
// 예) a[0] = 1, a[1] = 2, a[2] = 3 ...

// 7) 입력 : 1 2
//    출력 : 2 1
// 자바스크립트에서 문자열 자르기 함수 : 문자열.split("자를문자");
// 예) let arr = prompt("두 정수를 입력해주세요").split(" ");
//     arr(배열), arr[0] = 1, arr[1] = 2
//     alert(arr[1] + " " + arr[0]); // 2 1

// 8) 입력 : A b
//    출력 : b A
// let arr = prompt("두 문자를 입력해주세요").split(" ");
// alert(arr[1] + " " + arr[0]);

// 9) 입력 : 3:16
//    출력 : 3:16
// let time = (prompt("시간을 입력해 주세요"));
// alert(time);

// 10) 입력 : 2013.8.5
//     출력 : 2013.08.05
// let num = prompt("날짜를 입력해 주세요").split(".");
// let year = num[0]; // 년
// let month = ".0" + num[1]; // 월 (참고)08, 09 , 010, 012 (오류), slice(-2)
// let day = ".0" + num[2]; // 일
// alert(year + month + day);

// 11) 입력 : 000907-1121112 
//     출력 : 0009071121112
// let number = prompt("").split("-");
// let first = arr[0]; // 000907
// let second = arr[1]; // 1121112
// alert(first + second);

// 12) 입력 : Programing is very fun!! 
//     출력 : Programing is very fun!! 
// let strChar = prompt("문자열을 입력해주세요");
// alert(strChar);

// 13) 입력 : 1.414213
//     출력 : 1
// let num = (prompt("실수를 입력해주세요")).split(".");
// let first = num[0]; // 1
// let second = num[1]; // 414213
// alert(first);

// 14) 입력 : Boy
//     출력 : 'B'
//            'o'
//            'y'
// 힌트 : Boy(문자열) : 1문자의 합 == 문자들의 배열
//        let arr = "Boy" -> arr[0] = "B", arr[1] = "o", arr[2] = "y";
// let strChar = prompt("Boy를 입력해주세요");
// let arr = "'" + strChar[0] + "'" + "\n"; // 'B'
// let arr2 = "'" + strChar[1] + "'" + "\n"; // 'o'
// let arr3 = "'" + strChar[2] + "'" + "\n"; // 'y'
// alert(arr + arr2 + arr3);

// 15) 두 정수의 합을 출력한다.
// 입력1 : 2147483648
// 입력2 : 2147483648
// 출력 : 4294967296
// let num1 = Number(prompt("숫자 1")); // 2147483648
// let num2 = Number(prompt("숫자 2")); // 2147483648
// alert(num1 + num2); // 4294967296

// 16) 입력 : 75254 
//           숫자문자열 : "75254"
//               "75254" == "7" + "5" + "2" + "5" + "4"
//                       배열[0] + 배열[1] ... + 배열[4]
//     let aaa = "75254";
//        aaa[0] == "7";
//        aaa[1] == "5";
//     출력 : [70000]
//            [5000]
//            [200]
//            [50]
//            [4]
let arr = (prompt("75254"));
let arr2 = "[" + arr[0] + "0000]" + "\n"; // [ + 7 + 0000]
let arr3 = "[" + arr[1] + "000]" + "\n"; // [ + 5 + 000]
let arr4 = "[" + arr[2] + "00]" + "\n"; // [ + 2 + 00]
let arr5 = "[" + arr[3] + "0]" + "\n"; // [ + 5 + 0]
let arr6 = "[" + arr[4] + "]" + "\n"; // [ + 4 + ]
alert(arr2 + arr3 + arr4 + arr5 + arr6);
