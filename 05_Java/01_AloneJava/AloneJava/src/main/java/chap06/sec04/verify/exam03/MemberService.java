package chap06.sec04.verify.exam03;

/**
 * packageName : chap06.sec04.verify.exam03
 * fileName : MemberService
 * author : GGG
 * date : 2023-09-20
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class MemberService {
//    TODO: login 함수 : id가 "hong", 매개값 password가 "12345" => true 리턴
//                                                    아니면 => false 리턴
    boolean login(String id, String password) {
        if(id.equals("hong") && password.equals("12345")) {
            return true;
        } else {
            return false;
        }
    }

//    TODO: logout 함수 : 매개변수 id(문자열) : "hong"이 로그아웃 되었습니다."가 출력
    void logout(String id) {
        System.out.println(id + "이 로그아웃 되었습니다.");
    }
}
