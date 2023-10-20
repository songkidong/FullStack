package chap06.sec05.exam01;

/**
 * packageName : chap06.sec05.exam01
 * fileName : Car
 * author : GGG
 * date : 2023-09-21
 * description : 자동차 모델 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-21         GGG          최초 생성
 */
public class Car {
//    TODO: 속성, 생성자, 함수
//    모델 : 속성, 생성자, setter, getter
//    업무로직 : 업무로직 함수들만 작성
    String model; // 자동차 모델
    int speed; // 속도

//    매개변수 1개짜리 생성자 : model
    public Car(String model) {
        this.model = model;
    }

//    setter : speed 속성
    public void setSpeed(int speed) {
        this.speed = speed;
    }

//    업무로직 함수 : run
//    달립니다 10 ~ 50 증가 출력하는 로직
    void run() {
        for (int i = 10; i <= 50; i += 10) {
//            this.speed = i; // 속성에 값을 넣는 행위(나쁜 코딩)
            this.setSpeed(i); // setter 함수 이용해서 값을 수정(좋은 코딩)
            System.out.println(this.model + "가 달립니다." + this.speed + "km/h");
        }
    }
}
