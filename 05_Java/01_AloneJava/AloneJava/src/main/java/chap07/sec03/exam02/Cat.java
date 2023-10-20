package chap07.sec03.exam02;

/**
 * packageName : chap07.sec03.exam02
 * fileName : Cat
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
public class Cat extends Animal {
//    생성자
    public Cat() {
        this.kind = "포유류";
    }

//    재정의 함수 제작
    @Override
    public void sound() {
        System.out.println("야옹");
    }
}
