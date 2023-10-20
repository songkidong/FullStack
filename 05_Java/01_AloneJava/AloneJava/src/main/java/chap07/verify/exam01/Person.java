package chap07.verify.exam01;

/**
 * packageName : chap07.verify.exam01
 * fileName : Person
 * author : GGG
 * date : 2023-09-21
 * description : 부모 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-21         GGG          최초 생성
 */
public class Person {
//    속성 정의
    int age;
    String name;
    int height;
    int weight;

//    weight setter 생성
    public void setWeight(int weight) {
        this.weight = weight;
    }
}
