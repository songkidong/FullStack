package chap06.sec03.verify.exam03;

/**
 * packageName : chap06.sec03.verify.exam03
 * fileName : BoardApplication
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
public class BoardApplication {
    public static void main(String[] args) {
        Board board = new Board("제목");
        Board board2 = new Board("제목", "내용");
        Board board3 = new Board("제목", "내용", "작가");

        System.out.println("title :" + board.title);

        System.out.println("title2 :" + board2.title);
        System.out.println("content2 :" + board2.content);

        System.out.println("title3 :" + board3.title);
        System.out.println("content3 :" + board3.content);
        System.out.println("content3 :" + board3.writer);
    }
}
