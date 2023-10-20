package chap08.sec01.exam02;

/**
 * packageName : chap08.sec01.exam02
 * fileName : SoundableApplication
 * author : GGG
 * date : 2023-09-22
 * description : 매개변수(함수)의 다형성
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-22         GGG          최초 생성
 */
public class SoundableApplication {
//    공유(정적, 전역) 함수
    static void printSound(Soundable soundable) {
//        TODO: 매개변수에 자식객체를 넣으면 자식객체의 함수가 호출됨(sound())
        System.out.println(soundable.sound()); // 부모 인터페이스의 함수 호출
    }
    public static void main(String[] args) {
//        TODO: 함수의 매개변수의 다형성
        printSound(new Cat()); // 야옹
        printSound(new Dog()); // 멍멍
    }
}
