package chap06.sec03.exam03;

/**
 * packageName : chap06.sec03.exam03
 * fileName : CarApplication
 * author : GGG
 * date : 2023-09-20
 * description : 실행 클래스(main)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class CarApplication {
    public static void main(String[] args) {
//        객체 생성 : 모든 생성자 이용하기
//        기본 생성자
        Car car1 = new Car();
//        매개변수 1개짜리 생성자
        Car car2 = new Car("자가용");
//        매개변수 2개짜리 생성자
        Car car3 = new Car("자가용", "빨강");
//        매개변수 3개짜리 생성자
        Car car4 = new Car("자가용", "빨강", 200);

//        결과 출력 : 기본생성자 vs 3개짜리 생성자
        System.out.println(car1.company);
        System.out.println(car1.model);
        System.out.println(car1.color);
        System.out.println(car1.maxSpeed);

        System.out.println(car4.company);
        System.out.println(car4.model);
        System.out.println(car4.color);
        System.out.println(car4.maxSpeed);
    }
}
