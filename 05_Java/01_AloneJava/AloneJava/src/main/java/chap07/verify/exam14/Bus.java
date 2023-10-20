package chap07.verify.exam14;

/**
 * packageName : chap07.verify.exam14
 * fileName : Bus
 * author : GGG
 * date : 2023-09-22
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-22         GGG          최초 생성
 */
public class Bus implements Vehicle {
//    TODO: 1) run 의 메소드 재정의
    @Override
    public void run() {
        System.out.println("버스가 달립니다.");
    }

//    TODO: 2) checkFare 정의 : 승차요금을 체크합니다. 출력
    void checkFare() {
        System.out.println("승차요금을 체크합니다.");
    }
}
