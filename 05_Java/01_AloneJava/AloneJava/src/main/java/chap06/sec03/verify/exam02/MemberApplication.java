package chap06.sec03.verify.exam02;

/**
 * packageName : chap06.sec03.verify.exam02
 * fileName : MemberApplication
 * author : GGG
 * date : 2023-09-20
 * description : 실행 클래스(main)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class MemberApplication {
    /**
     * Member 객체를 생성하고 싶습니다. 생성자에서 name 속성과 id 속성을
     *        초기화 할 수 있도록 Member 클래스를 작성해 보세요.
     * @param args
     */
    public static void main(String[] args) {
        Member member = new Member("홍길동", "hong");

        System.out.println("name :" + member.name);
        System.out.println("id :" + member.id);
    }
}