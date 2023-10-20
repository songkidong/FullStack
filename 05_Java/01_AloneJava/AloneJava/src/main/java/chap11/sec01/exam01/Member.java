package chap11.sec01.exam01;

import java.util.Objects;

/**
 * packageName : chap11.sec01.exam01
 * fileName : Member
 * author : GGG
 * date : 2023-09-25
 * description : 객체를 동등 비교(.equals())
 * 요약 :
 *      두개의 객체가 같다라는 의미는 ? 속성이 같다는 의미임
 *      .equals() 함수 소스를 보면 두개의 객체를 비교할 때 ==(비교연산자:방번호를 비교)
 *      String 객체에서 어떻게 비교 : .equals() 함수 재정의해서 == 대신 값을 비교해서 수정되어 있음
 *      TODO: => (결론) : 두개의 객체를 비교할 때 속성을 비교하게 함수 재정의를 해서 사용해야함
 *      자바 언어의 최고 조상 객체 : Object 의 대표 함수 (.equals(), .hashCode(), .toString() 등)
 *      => 자바의 모든 객체(클래스)는 Object 를 상속받고 있음(extends 키워드는 없지만)
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-25         GGG          최초 생성
 */
public class Member {
//    TODO: 속성, 생성자함수, 함수
//    속성
    public String id;

//    생성자
    public Member(String id) {
        this.id = id;
    }

//    객체 동등 비교를 위해 .equals 함수 재정의 해야함
//    TODO: 인텔리제이 자동 코딩
//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass()) return false;
//        Member member = (Member) o;
//        return Objects.equals(id, member.id); // 객체 속성 동등 비교
//    }

//    TODO: (참고) 개발자 직접 코딩
    @Override
    public boolean equals(Object o) {
//        1) 매개변수 o 객체가 Member 인가?
        if(o instanceof Member) {
//            강제 형변환
            Member member = (Member) o;
//        2) 속성의 값(id) 비교 같으면 true, 아니면 false
            if(this.id.equals(member.id)) {
                return true;
            }
        }
        return false;
    }

}
