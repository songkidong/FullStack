package chap06.sec04.exam05;

/**
 * packageName : chap06.sec04.exam05
 * fileName : CarApplication
 * author : GGG
 * date : 2023-09-20
 * description : 실행클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */

/**
 *    결과 :
 *    키를 돌립니다.
 *    달립니다.(시속:10km/h)
 *    달립니다.(시속:20km/h)
 *    달립니다.(시속:30km/h)
 *    달립니다.(시속:40km/h)
 *    달립니다.(시속:50km/h)
 *    현재 속도: 50km/h
 */

public class CarApplication {
    public static void main(String[] args) {
        Car car = new Car();
        car.keyTurnOn(); // 키를 돌립니다. 출력
        car.run(); // 5개의 달립니다.
        int speed = car.getSpeed(); // 현재 속도 값을 리턴 (getter 함수 : get속성명)
        System.out.println("현재속도:" + speed + "km/h");
    }
}
