package chap07.sec02.exam01;

/**
 * packageName : chap07.sec02.exam01
 * fileName : Child3
 * author : GGG
 * date : 2023-09-22
 * description : 자식 3
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-22         GGG          최초 생성
 */
public class Child3 extends Parent {
//    method2() 오버라이딩
    @Override
    public void method2() {
        System.out.println("자식3 method2");
    }

//    자식3의 고유함수
    public void method3() {
        System.out.println("자식3 method3");
    }
}
