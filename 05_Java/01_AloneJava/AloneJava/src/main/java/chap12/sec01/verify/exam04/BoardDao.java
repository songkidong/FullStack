package chap12.sec01.verify.exam04;

import chap12.sec01.verify.exam03.Faq;

import java.util.ArrayList;
import java.util.List;

/**
 * packageName : chap12.sec01.verify.exam04
 * fileName : BoardDao
 * author : GGG
 * date : 2023-09-26
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-26         GGG          최초 생성
 */
public class BoardDao {
    public List<Board> createDept() {
//        list 객체 생성 : 다형성
        List<Board> list = new ArrayList<>();
        list.add(new Board("제목1", "내용1"));
        list.add(new Board("제목2", "내용2"));
        list.add(new Board("제목3", "내용3"));

        return list;
    }
}
