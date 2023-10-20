package chap06.sec04.verify.exam04;

/**
 * packageName : chap06.sec04.verify.exam04
 * fileName : Printer
 * author : GGG
 * date : 2023-09-20
 * description : 프린터 모델 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class Printer {
    //    TODO: 속성, 생성자함수 , 함수(메소드)
//    속성, 생성자함수 생략
//    함수 : 오버로딩 기능
//    .println(10), .println(true), .println(5.7), .println("홍길동")
    static void println(int value){
        System.out.println("공유함수(int) :" + value);
    }
    static void println(boolean value){
        System.out.println("공유함수(boolean) :" + value);
    }
    static void println(double value){
        System.out.println("공유함수(double) :" + value);
    }
    static void println(String value){
        System.out.println("공유함수(String) :" + value);
    }
}