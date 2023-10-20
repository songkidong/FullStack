package chap13.sec01.exam03;

/**
 * packageName : chap12.sec01.exam07
 * fileName : CalculatorApplication
 * author : ds
 * date : 2022-10-06
 * description : 실행 클래스
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2022-10-06         ds          최초 생성
 */
public class CalculatorApplication {
    public static void main(String[] args) {
//      TODO: 구성 : 다른 객체를 기능을 사용하는 방법 (vs 상속과 비교)
//         예제: 여러 쓰레드에서 1가지 함수를 동시에 접근하면 결과가 이상해 질 수 있음(동기화 문제)
        Calculator calculator = new Calculator();

//      TODO: User1 쓰레드 : 계산기 객체를 setter 로 전달
        User1 user1 = new User1();
        user1.setCalculator(calculator);
        user1.start(); // run() 실행 : memory = 50

//      TODO: User2 쓰레드 : 계산기 객체를 setter 로 전달
        User2 user2 = new User2();
        user2.setCalculator(calculator);
        user2.start(); // run() 실행 : memory = 100
    }
}









