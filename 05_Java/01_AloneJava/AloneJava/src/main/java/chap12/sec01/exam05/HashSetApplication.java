package chap12.sec01.exam05;

import java.util.HashSet;
import java.util.Set;

/**
 * packageName : chap12.sec01.exam05
 * fileName : HashSetApplication
 * author : GGG
 * date : 2023-09-25
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-25         GGG          최초 생성
 */
public class HashSetApplication {
    public static void main(String[] args) {
//        객체 생성 : 다형성
        Set<Member> set = new HashSet<>();

//        객체 추가
        set.add(new Member("홍길동", 30));
        set.add(new Member("홍길동", 30));
//        TODO: 중복제거 되었는지 확인(.hashCode() 재정의)
        System.out.println(set);
    }
}
