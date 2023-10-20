package chap06.sec06.exam06;

/**
 * packageName : chap06.sec06.exam06
 * fileName : CarApplication
 * author : GGG
 * date : 2023-09-21
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-21         GGG          최초 생성
 */
public class CarApplication {
    public static void main(String[] args) {
//        객체 생성
        Car car = new Car();
//        테스트 : 속도에 음수 넣기
        car.setSpeed(-50);

        System.out.println("현재 속도 : " + car.getSpeed()); // 현재 속도 읽기

//        올바른 속도 변경 : 60
        car.setSpeed(60);

//        멈춤
        if(!car.isStop()) { // 자동차 상태 읽기
            car.setStop(true); // 자동차 멈춤
        }
        System.out.println("현재 속도 : " + car.getSpeed()); // 현재 속도 읽기
    }
}
