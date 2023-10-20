package chap08.sec01.exam02;

/**
 * packageName : chap08.sec01.exam02
 * fileName : Dog
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
public class Dog implements Soundable {
//    메소드 구현 : "멍멍"
    @Override
    public String sound() {
        return "멍멍";
    }
}
