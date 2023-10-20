package chap06.sec05.exam05;

/**
 * packageName : chap06.sec05.exam05
 * fileName : PersonApplication
 * author : GGG
 * date : 2023-09-21
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-21         GGG          최초 생성
 */
public class PersonApplication {
    public static void main(String[] args) {
//        객체 생성
        Person person = new Person("123456-1234567", "송기동");

//        상수 출력
        System.out.println(person.nation); // 상수
        System.out.println(person.ssn); // 상수
        System.out.println(person.name); // 변수
//        테스트 : 상수/변수
        person.name = "홍길동";
//        person.nation = "CANADA"; // 상수이므로 변경 불가(에러 발생)
    }
}
