package chap07.sec02.exam02;

/**
 * packageName : chap07.sec02.exam02
 * fileName : DriverApplication
 * author : GGG
 * date : 2023-09-22
 * description : 매개변수(함수)의 다형성, 실행 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-22         GGG          최초 생성
 */
public class DriverApplication {
    public static void main(String[] args) {
//        전략 클래스 : Driver(운전자) 객체 생성
        Driver driver = new Driver();

//        자식 객체 : Bus, Taxi 생성
        Bus bus = new Bus();
        Taxi taxi = new Taxi();

//        TODO: 매개변수의 다형성 이용 : 객체에 따라 결과가 달라짐
        driver.drive(bus); // bus 자식 객체?
        driver.drive(taxi); // taxi 자식 객체?

    }
}
