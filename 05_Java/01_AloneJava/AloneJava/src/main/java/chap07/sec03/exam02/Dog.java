package chap07.sec03.exam02;

/**
 * packageName : chap07.sec03.exam02
 * fileName : Dog
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
public class Dog extends Animal {
//    생성자
    public Dog() {
        this.kind = "포유류";
    }
    
//    sound() : "멍멍" 함수 재정의(오버라이딩)
    @Override
    public void sound() {
        System.out.println("멍멍");
    }
}
