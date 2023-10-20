package chap12.sec01.exam08;

import java.util.ArrayList;
import java.util.List;

/**
 * packageName : chap12.sec01.exam08
 * fileName : ArrayListApplication
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
public class ArrayListApplication {
    public static void main(String[] args) {
//        TODO: List 객체 생성
        List<Student> students = new ArrayList<>();

//        TODO: 객체 자료 추가
        students.add(new Student(1, "홍길동"));
        students.add(new Student(2, "장길산"));
        students.add(new Student(3, "임꺽정"));
//        결과 출력
        System.out.println(students);

//        TODO: 객체 자료 수정 : 0번 인덱스번호의 값 : 홍길동 -> 홍길동2 로 수정
        students.set(0, new Student(1, "홍길동2"));
//        결과 출력(인덱스번호 0번)
        System.out.println(students.get(0));

//        TODO: 객체 자료 삭제 : 0번 인덱스번호의 값
        students.remove(0);
        System.out.println(students.get(0));
    }
}
