package chap03;

import java.util.Scanner;

/**
 * packageName : chap03
 * fileName : Sec0301
 * author : GGG
 * date : 2023-09-18
 * description : 연산자
 * 요약 :
 * 산술 : +, -, *, /, %(나머지 연산자)
 * 부호 : +, -
 * 문자열 붙이기 : +
 * 대입 : =, +=, -=, *=, /=, %=
 * 증감 : ++, --
 * 비교 : ==, !=, >, <, >=, <=, instanceof
 * 논리 : !(not), &, |(비트연산자), &&(논리곱), ||(논리합)
 * 삼항 : (조건식)? A:B
 * 우선순위 필요하면 () 쓸것 : () 최고 우선순위
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-18         GGG          최초 생성
 */
public class Sec0301 {
    public void exam01() {
        int x = -100;
        int result1 = +x; // 부호 연산자 이용
        int result2 = -x;
        System.out.println(result1);
        System.out.println(result2);
    }

    public void exam02() {
        boolean play = true;
        System.out.println(play);
        play = !play; // 반대값(!) : false
        System.out.println(play);
    }

    /**
     * 사칙연산 예제 : /(나눗셈) 조심
     */
    public void exam03() {
        int v1 = 5;
        int v2 = 2;

        int result = v1 + v2;
        System.out.println(result);

//        나눗셈
        int result2 = v1 / v2;
        System.out.println(result2); // 정수/정수 => 실수부분이 잘림

//        TODO: 나눗셈 개선 코딩 : 강제 형변환 후 계산 해야함
        double result3 = (double) v1 / (double) v2;
//        double result3 = (double)v1 / v2; // 같은 결과
        System.out.println(result3);
    }

    //    .next() : 공백까지 입력받기

    //    연습문제 1010번 : 정수 1개를 입력받아 그대로 출력하기
//    입력 : 5
//    출력 : 5
    public void exam04() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("정수를 입력해주세요");
        System.out.println(scanner.next());
    }

    //    연습문제 1014번 : 문자 2개 입력받아 순서 바꿔 출력하기(설명)
//    입력 : a b
//    출력 : b a
    public void exam05() {
        Scanner scanner = new Scanner(System.in);
        String strFirst = scanner.next();
        String strSecond = scanner.next();
        System.out.println(strSecond + " " + strFirst);
    }

    /**
     * char : 내부적으로 정수로 저장(유니코드 : 아스키코드 확장판(한글, 중국어 등을 표시))
     */
    public void exam06() {
        char c1 = 'A' + 1; // 'B' 아스키코드(66) ('A' 아스키코드(65) 65 + 1 = 66)
        char c2 = 'A';

        System.out.println(c1);
        System.out.println(c2);
    }

    //    연습문제 3) char 이용하는 문제
//    값이 'A' 로 주어져 있습니다. 'A'가 대문자이면 대문자이군요 라고 출력하고,
//    소문자이면 소문자이군요 라고 출력하고, 숫자이면 숫자이군요 라고 출력하세요
    public void exam07() {
        int charCode = 'A'; // 값이 주어져 있음 (65)
//        TODO: 아래에 코딩을 완성하세요
        if ((charCode >= 65) && (charCode <= 90)) {
            System.out.println("대문자이군요");
        } else if ((charCode >= 97) && (charCode <= 122)) {
            System.out.println("소문자이군요");
        } else if ((charCode >= 48) && (charCode <= 57)) {
            System.out.println("숫자이군요");
        } else {
            System.out.println("다른 문자군요");
        }
    }

    /**
     * 연습문제 : 정수 1개가 주어진다. 2와 3의 배수이면 2 또는 3의 배수이군요
     * 아니면 2 또는 3의 배수가 아니군요 출력하세요
     */
    public void exam08() {
        int value = 6;
//        TODO: 아래에 코딩을 완성하세요
        if ((value % 2 == 0) || (value % 3 == 0)) {
            System.out.println("2 또는 3의 배수이군요");
        } else {
            System.out.println("2 또는 3의 배수가 아니군요");
        }
    }
}
