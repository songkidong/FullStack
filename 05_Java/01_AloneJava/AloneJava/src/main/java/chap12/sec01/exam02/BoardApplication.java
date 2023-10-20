package chap12.sec01.exam02;

import java.util.List;
import java.util.Vector;

/**
 * packageName : chap12.sec01.exam02
 * fileName : BoardApplication
 * author : GGG
 * date : 2023-09-25
 * description : 벡터 실행 클래스 (객체 넣기)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-25         GGG          최초 생성
 */
public class BoardApplication {
    public static void main(String[] args) {
//        백터 객체 생성 : 다형성 이용
//        TODO: Vector 의 부모 : List (add():추가, get():조회, set():수정, remove():삭제)
        List<Board> list = new Vector<>();
//        객체 추가
        list.add(new Board("제목1", "내용1", "글쓴이1"));
        list.add(new Board("제목2", "내용2", "글쓴이2"));
        list.add(new Board("제목3", "내용3", "글쓴이3"));
        list.add(new Board("제목4", "내용4", "글쓴이4"));
        list.add(new Board("제목5", "내용5", "글쓴이5"));
//        결과 출력
        System.out.println(list); // 속성 : toString() : list 에서 생략해도 됨(자동 실행)

//        삭제 2건
        list.remove(2); // 2번 삭제 후 자동으로 자료가 당겨짐
        list.remove(3);
//        결과 출력
        System.out.println(list);
    }
}
