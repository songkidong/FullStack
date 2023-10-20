package chap06.sec04.verify.exam04;

/**
 * packageName : chap06.sec04.verify.exam04
 * fileName : PrinterApplication
 * author : GGG
 * date : 2023-09-20
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */

/**
 * TODO: 힌트 : static 함수 정의하기
 *      static void 함수명(자료형 매개변수) { sout + 매개변수 ; }
 *      정적함수(공유함수, 전역함수) : 프로그램 상에 1개만 존재
 *      일반적으로 객체/함수를 만들면 여러개의 복사본으로 객체/함수가 만들어 질 수 있음
 *      (스택방(기본자료형 값) / 힙방(참조자료형 값), 메소드방(정적함수/정적변수))
 *      => 자바 메모리 관리 : 가비지 컬렉션 (메모리 회수하는 역할하는 프로세스)
 *      => 정적(공유,전역) 함수/변수 : 가비지 컬렉션 대상이 아니어서 메모리가 회수되지 않음
 *        (최소화해서 사용해야함)
 *      => 사용법(정의) : static 리턴자료형 함수명(자료형 매개변수) { }
 *      => 사용법(사용) : 클래스명.함수명();
 * // 결과 :
 * //    공유함수(int) :10
 * //    공유함수(boolean) :true
 * //    공유함수(double) :5.7
 * //    공유함수(String) :홍길동
 */
public class PrinterApplication {
    public static void main(String[] args) {
//        공유함수 오버로딩 예제
//        공유함수 호출하는 방법
//        사용법 : 클래스명.공유함수명();
        Printer.println(10);
        Printer.println(true);
        Printer.println(5.7);
        Printer.println("홍길동");
    }
}