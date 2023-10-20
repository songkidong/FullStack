package chap09.sec02.exam02;

/**
 * packageName : chap09.sec02.exam02
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
//        TODO: 1) 익명 객체(field) 속성의 함수 호출
        anonymous.field.turnOn();
        anonymous.field.turnOff();

//        TODO: 2) 함수 호출 : 내부에 익명 객체 생성
        anonymous.method1();

//        TODO: 3) 다형성 이용
        anonymous.method2(new RemoteControl() {
            @Override
            public void turnOn() {
                System.out.println("SmartTv 를 켭니다.");
            }

            @Override
            public void turnOff() {
                System.out.println("SmartTv 를 끕니다.");
            }
        });
    }
}
