package chap12.sec01.verify.exam07;

import java.util.Objects;

/**
 * packageName : chap12.sec01.verify.exam07
 * fileName : Student
 * author : GGG
 * date : 2023-09-26
 * description : 학생 모델 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-26         GGG          최초 생성
 */
public class Student {
//    TODO: 힌트 : Hashset, .hashCode() 재정의 해야 정상 동작
//    속성
    private int studentNum; // 학번
    private String name; // 이름

//    생성자
    public Student() {

    }

    public Student(int studentNum, String name) {
        this.studentNum = studentNum;
        this.name = name;
    }

//    재정의 함수 : .equals(), .hashCode(), toString()
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
        return Objects.equals(studentNum, student.studentNum) && Objects.equals(name, student.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(studentNum, name);
    }

    @Override
    public String toString() {
        return "Student{" +
                "studentNum=" + studentNum +
                ", name='" + name + '\'' +
                '}';
    }

//    getter 함수
    public int getStudentNum() {
        return studentNum;
    }

    public String getName() {
        return name;
    }
}
