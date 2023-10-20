package chap11.sec01.exam13;

/**
 * packageName : chap11.sec01.exam13
 * fileName : TrimApplication
 * author : GGG
 * date : 2023-09-26
 * description : String 클래스 함수 : 문자열의 앞/뒤 공백 없애기 : trim()
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-26         GGG          최초 생성
 */
public class TrimApplication {
    public static void main(String[] args) {
        String tel = "  12345 ";

//        TODO: 앞/뒤 공백 없애기 함수 : 문자열.trim()
        System.out.println(tel);
        System.out.println(tel.trim());
    }
}
