package chap06.sec04.exam06;

/**
 * packageName : chap06.sec04.exam06
 * fileName : CalculatorApplication
 * author : GGG
 * date : 2023-09-20
 * description : 실행 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class CalculatorApplication {
    public static void main(String[] args) {
        Calculator calculator = new Calculator();

//        TODO: 함수의 오버로딩을 이용한 예제
//          Calculator 클래스 함수 2개
//        정사각형의 넓이 구하기(한변의 길이(가로) * 한변의 길이(가로))
        double result1 = calculator.areaRectangle(10);

//        직사각형 넓이 구하기(가로 * 세로)
        double result2 = calculator.areaRectangle(10, 20);

//        결과 출력
        System.out.println("정사각형 넓이 :" + result1);
        System.out.println("직사각형 넓이 :" + result2);
    }
}