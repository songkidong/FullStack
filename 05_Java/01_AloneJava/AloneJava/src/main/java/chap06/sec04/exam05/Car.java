package chap06.sec04.exam05;

/**
 * packageName : chap06.sec04.exam05
 * fileName : Car
 * author : GGG
 * date : 2023-09-20
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class Car {
//    TODO: 속성, 생성자함수, 함수(메소드)
    int speed; // 자동차 속도

    /**
     * 현재 속성의 값을 구하는 함수 : getter 함수
     * 사용법 : 리턴자료형 get속성명(){return 속성명;}
     */
    public int getSpeed() {
        return speed;
    }

    /**
     * 키를 돌립니다. 출력 함수
     */
//    자동화 기능 : alt + insert => getter 선택자동화 기능 : alt + insert => getter 선택
    void keyTurnOn() {
        System.out.println("키를 돌립니다.");
    }

    /**
     * 달립니다. 5개 출력 + 속도 출력하는 함수
     */
    void run() {
//        반복문 5번 실행 : 10부터 50까지 10씩 증가
        for (int i = 10; i <= 50; i = i + 10) {
//            속성 = 10씩 증가
            speed = i;
            System.out.println("달립니다. (시속 : " + speed + "km/h)");
        }
    }
}
