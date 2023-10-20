package chap06.sec03.verify.exam03;

/**
 * packageName : chap06.sec03.verify.exam03
 * fileName : Board
 * author : GGG
 * date : 2023-09-20
 * description : 게시판 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class Board {
//    TODO: 속성, 생성자, 함수
//    속성 정의
    String title; // 제목
    String content; // 내용
    String writer; // 작가

//    생성자 정의
    public Board(String title) {
        this.title = title;
    }

    public Board(String title, String content) {
        this.title = title;
        this.content = content;
    }

    public Board(String title, String content, String writer) {
        this.title = title;
        this.content = content;
        this.writer = writer;
    }
}
