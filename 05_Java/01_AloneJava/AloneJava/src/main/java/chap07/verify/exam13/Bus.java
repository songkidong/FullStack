package chap07.verify.exam13;

/**
 * packageName : chap07.verify.exam13
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
    //    메소드 구현
    @Override
    public void run() {
        System.out.println("버스가 달립니다.");
    }
}
