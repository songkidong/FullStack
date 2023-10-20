package chap11.sec01.exam05;

/**
 * packageName : chap11.sec01.exam05
 * fileName : CarApplication
 * author : GGG
 * date : 2023-09-26
 * description : Class 클래스 소개 : 클래스의 정보 보기
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-26         GGG          최초 생성
 */
public class CarApplication {
    public static void main(String[] args) {
//        TODO: Class : 자바에서 클래스의 정보(패키지명, 클래스명, 경로명 등) 있는 객체
//          java -> 컴파일 -> .class
        Class clazz = Car.class;

//        TODO: 정보 보기
        System.out.println(clazz.getPackage().getName()); // 패키지 정보 보기
        System.out.println(clazz.getName()); // 패키지 + 클래스명 정보 보기(full 클래스명)
        System.out.println(clazz.getSimpleName()); // 패키지명 제외한 클래스명 정보 보기
    }
}
