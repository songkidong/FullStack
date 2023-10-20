package chap07.sec01.exam02;

/**
 * packageName : chap07.sec01.exam02
 * fileName : CalculatorApplication
 * author : GGG
 * date : 2023-09-21
 * description : 실행 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-21         GGG          최초 생성
 */
public class CalculatorApplication {
    public static void main(String[] args) {
        int r = 10; // 반지름
//        객체 생성 : 부모 객체 : Calculator
        Calculator calculator = new Calculator();
        System.out.println("원면적 : " + calculator.areaCircle(r)); // 부모 함수
        System.out.println("----------------------------------");
//        객체 생성 : 자식 객체 : Computer
        Computer computer = new Computer();
//        TODO: 부모 함수 areaCircle() vs 자식 함수 areaCircle() (win)
        System.out.println("원면적 : " + computer.areaCircle(r)); // 자식 함수
    }
}
