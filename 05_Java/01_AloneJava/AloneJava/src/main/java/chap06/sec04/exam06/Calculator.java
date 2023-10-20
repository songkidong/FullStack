package chap06.sec04.exam06;

/**
 * packageName : chap06.sec04.exam06
 * fileName : Calculator
 * author : GGG
 * date : 2023-09-20
 * description : 계산기 모델
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class Calculator {
//    TODO: 속성, 생성자함수, 함수
//    함수

    /**
     * 정사각형 넓이 구하는 함수 : areaRectangle(10)
     * @param width
     * @return
     */
    double areaRectangle(double width) {
        return width * width;
    }

    /**
     * 직사각형 넓이 구하는 함수 : areaRectangle(10, 20)
     * @param width
     * @param height
     * @return
     */
    double areaRectangle(double width, double height) {
        return width * height;
    }
}
