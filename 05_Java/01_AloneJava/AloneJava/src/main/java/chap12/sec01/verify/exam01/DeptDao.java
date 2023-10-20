package chap12.sec01.verify.exam01;

import chap12.sec01.exam02.Board;

import java.util.ArrayList;
import java.util.List;

/**
 * packageName : chap12.sec01.verify.exam01
 * fileName : DeptDao
 * author : GGG
 * date : 2023-09-25
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-25         GGG          최초 생성
 */
public class DeptDao {
    public List<Dept> createDept() {
//        객체 생성
        List<Dept> list = new ArrayList<>();
//        TODO: 아래 코드를 완성하세요 (결과와 같이 출력되도록)
//          힌트 : 객체변수.add(new 생성자함수(변수1, 변수2, 변수3)) => 객체 1개 배열에 저장됨
//                결과가 화면에 3개가 출력되므로 add(객체) 3번 하면 됨
//      10 Sales       부산
//      20 Marketing   서울
//      30 Research    대전
        list.add(new Dept(10, "Sales", "부산"));
        list.add(new Dept(20, "Marketing", "서울"));
        list.add(new Dept(30, "Research", "대전"));
        return list;
    }
}
