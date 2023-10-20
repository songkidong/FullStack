package chap07.sec01.exam02;

/**
 * packageName : chap07.sec01.exam02
 * fileName : Computer
 * author : GGG
 * date : 2023-09-21
 * description : 함수 재정의(오버라이딩 : overriding), 자식 클래스
 * 요약 :
 *      함수 재정의 : (상속 관계)
 *          부모 자식 간에 함수이름이 같을때 사용하는 것,
 *          부모 함수를 사용하지 않고 같은 이름으로 자식의 함수를 사용하고자 할때 활용함
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-21         GGG          최초 생성
 */
public class Computer extends Calculator {
//    오버라이딩(overriding, 메서드 재정의) 함수 : alt + insert (자동화 기능 이용)
//    @Override : 어노테이션(주석) => 자주 사용하는 함수(기능)를 간단히 적용한 것
//    => 기능 : 부모/자식 함수의 이름을 비교해서 이름이 틀리면 에러를 발생시켜주는 어노테이션
    @Override
    double areaCircle(double r) {
        System.out.println("Computer(자식) 객체의 areaCircle 실행");
        return Math.PI * r * r; // 원의 넓이
    }
}
