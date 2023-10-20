package chap07.verify.exam12;

/**
 * packageName : chap07.verify.exam12
 * fileName : DeskTop
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
public class DeskTop extends Computer {
//    메소드 구현
    @Override
    public void display() {
        System.out.println("DeskTop Display()");
    }

    @Override
    public void typing() {
        System.out.println("DeskTop Typing()");
    }
}
