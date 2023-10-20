package chap07.verify.exam07;

/**
 * packageName : chap07.verify.exam07
 * fileName : LaserPrinter
 * author : GGG
 * date : 2023-09-21
 * description : 자식 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-21         GGG          최초 생성
 */
public class LaserPrinter extends Printer{
    @Override
    public void print() {
        System.out.println("레이저프린터로 프린트합니다. 고급 사양으로 프린팅합니다.");
    }
}
