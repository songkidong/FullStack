package chap07.verify.exam06;

/**
 * packageName : chap07.verify.exam06
 * fileName : Student
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
public class Student extends Person{
//    속성 정의
    String id;

//    1개짜리 생성자
    public Student(String name) {
        this.name = name;
    }

//    get, set 함수
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
