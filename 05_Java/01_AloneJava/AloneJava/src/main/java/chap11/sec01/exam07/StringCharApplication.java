package chap11.sec01.exam07;

/**
 * packageName : chap11.sec01.exam07
 * fileName : StringCharApplication
 * author : GGG
 * date : 2023-09-26
 * description : 문자열에서 어떤 인덱스번호의 한문자 조회하기 : charAt(인덱스번호)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-26         GGG          최초 생성
 */
public class StringCharApplication {
    public static void main(String[] args) {
//        주민번호
        String ssn = "123456-1234567";

//        TODO: 한문자 가져오기
//          사용법 : 문자열.charAt(인덱스번호) => 결과 : char 한문자 리턴
        char gender = ssn.charAt(7); // '1' 문자를 가져옴
        if(gender == '1' || gender == '3') {
            System.out.println("남자입니다.");
        } else if(gender == '2' || gender == '4') {
            System.out.println("여자입니다.");
        }
    }
}
