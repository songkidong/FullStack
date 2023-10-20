package chap07.sec01.exam03;

/**
 * packageName : chap07.sec01.exam03
 * fileName : Airplane
 * author : GGG
 * date : 2023-09-21
 * description : 부모 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-21         GGG          최초 생성
 */
public class Airplane {
//    함수

    /**
     * 비행기 이륙하는 함수
     */
    public void takeOff() {
        System.out.println("takeOff");
    }

    /**
     * 비행기 날라가는 함수
     */
    public void fly() {
        System.out.println("fly");
    }

    /**
     * 비행기 착륙하는 함수
     */
    public void land() {
        System.out.println("land");
    }
}
