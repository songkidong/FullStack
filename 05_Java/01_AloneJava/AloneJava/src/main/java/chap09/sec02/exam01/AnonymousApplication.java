package chap09.sec02.exam01;

/**
 * packageName : chap09.sec02.exam01
 * fileName : AnonymousApplication
 * author : GGG
 * date : 2023-10-02
 * description : 익명 클래스 실행
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-02         GGG          최초 생성
 */
public class AnonymousApplication {
    public static void main(String[] args) {
//        객체 생성
        Anonymous anonymous = new Anonymous();
//      TODO: 1) field (익명 클래스 : wake())
        anonymous.field.wake();

//      TODO: 2) method1() 함수 호출
        anonymous.method1(); // 익명객체의 함수 호출

//      TODO: 3) 매개변수의 다형성 이용 : 함수명(자식객체)
        anonymous.method2(new Person(){
//            TODO: 익명 클래스(자식)
            void study() {
                System.out.println("공부합니다.");
            }

            @Override
            void wake() {
                System.out.println("8시에 일어납니다.");
                study();
            }
        });
    }
}