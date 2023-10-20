package chap06.sec05.exam02;

/**
 * packageName : chap06.sec05.exam02
 * fileName : Calculator
 * author : GGG
 * date : 2023-09-21
 * description : 정적 변수(공유 변수, 전역 변수) 1개 생성(메소드 공간)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-21         GGG          최초 생성
 */
public class Calculator {
//    정적(공유) 속성
//    static 접근제한자 리턴자료형 함수명(){} : 정적 함수
//    TODO: 정적(공유) 속성 변수
//      사용법 : static 자료형 속성명;
    static double pi = 3.14;

    /**
     * 정적(공유) 덧셈 함수
     */
    static int plus(int x, int y) {
        return x + y;
    }

    /**
     * 정적(공유) 뺄셈 함수
     */
    static int minus(int x, int y) {
        return x - y;
    }
}
