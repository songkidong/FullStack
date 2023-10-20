package chap06.sec03.exam03;

/**
 * packageName : chap06.sec03.exam03
 * fileName : Car
 * author : GGG
 * date : 2023-09-20
 * description : 생성자 오버로딩
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class Car {
//    TODO: 속성(필드), 생성자함수, 함수(메소드)
//    속성
    String company = "현대자동차"; // 제조사
    String model; // 자동차 모델
    String color; // 자동차 색깔
    int maxSpeed; // 최고 속도

//    기본 생성자
    public Car(){}

//    매개변수 1개짜리 생성자
    public Car(String model) {
//        TODO: this (객체 자기자신을 의미하는 객체변수)
//          객체의 사용 : 객체변수.속성명
        this.model = model;
    }

//    매개변수 2개짜리 생성자
    public Car(String model, String color) {
        this.model = model;
        this.color = color;
    }

//    매개변수 3개짜리 생성자
//    자동화 기능 이용 : alt + insert => 생성자 속성 선택 후 확인
    public Car(String model, String color, int maxSpeed) {
        this.model = model;
        this.color = color;
        this.maxSpeed = maxSpeed;
    }
}
