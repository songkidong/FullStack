package chap06.sec03.exam02;

/**
 * packageName : chap06.sec03.exam02
 * fileName : Korean
 * author : GGG
 * date : 2023-09-20
 * description : 한국인 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class Korean {
//    TODO: 속성, 생성자함수, 함수(메소드)
//    속성
    String name; // 이름
    String ssn; // 주민번호

//    생성자 함수
    Korean() {}; // 기본생성자
    Korean(String strName, String strSsn) {
//        생성자의 역할 : 속성에 값을 처음에 넣어 두는 행위
        name = strName; // 매개변수 이름 값을 속성에 저장
        ssn = strSsn; // 매개변수 주민번호 값을 속성에 저장
    }
}
