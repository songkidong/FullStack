package chap07.sec01.exam03;

/**
 * packageName : chap07.sec01.exam03
 * fileName : SupersonicAirplane
 * author : GGG
 * date : 2023-09-21
 * description : 자식 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-21         GGG          최초 생성
 */
public class SupersonicAirplane extends Airplane{
//    속성 : 모드 바꿈 속성
    public static final String NORMAL = "NORMAL"; // 공유(정적,전역) 함수
    public static final String SUPERSONIC = "SUPERSONIC";

    public String flymode = NORMAL; // 기본모드 : 최초에 NORMAL

    /**
     * fly() 함수에 모드 선택 추가 : 오버라이딩(메소드 재정의) : alt + insert
     */
    @Override
    public void fly() {
        if(flymode.equals(SUPERSONIC)) {
            System.out.println("Supersonic fly"); // 슈퍼소닉 모드 비행
        } else {
//            System.out.println("fly"); // 기본 비행
//            TODO: super.함수() : 부모쪽에 있는 함수를 호출
            super.fly();
        }
    }
}
