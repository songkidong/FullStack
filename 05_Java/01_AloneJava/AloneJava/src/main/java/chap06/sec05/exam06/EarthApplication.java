package chap06.sec05.exam06;

/**
 * packageName : chap06.sec05.exam06
 * fileName : EarthApplication
 * author : GGG
 * date : 2023-09-21
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-21         GGG          최초 생성
 */
public class EarthApplication {
    public static void main(String[] args) {
//        결과 출력 : 지구 반지름, 표면적
//        TODO: 공유(정적) 함수/변수/상수 : 클래스명.상수명 (객체생성 없음)
        System.out.println("지구의 반지름 : " + Earth.EARTH_RADIUS + "km");
        System.out.println("지구의 표면적 : " + Earth.EARTH_AREA + "km^2");
    }
}
