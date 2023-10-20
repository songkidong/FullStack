package chap11.sec01.exam09;

/**
 * packageName : chap11.sec01.exam09
 * fileName : IndexOfApplication
 * author : GGG
 * date : 2023-09-26
 * description : String 클래스의 함수 : IndexOf()
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-26         GGG          최초 생성
 */
public class IndexOfApplication {
    public static void main(String[] args) {
        String subject = "자바 프로그래밍";

//        TODO: 전달된 문자열이 시작되는 인덱스번호를 리턴 : IndexOf(문자열)
        int location = subject.indexOf("프로그래밍");
        System.out.println(location);

//        TODO: (참고) 찾는 문자열이 없으면 : -1
        int location2 = subject.indexOf("파이썬");
        System.out.println(location2);
    }
}
