package chap05;

import java.util.Calendar;

/**
 * packageName : chap05
 * fileName : Sec0503
 * author : GGG
 * date : 2023-09-19
 * description : 열거형
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-19         GGG          최초 생성
 */
public class Sec0503 {
    /**
     * 열거형 사용 예제
     */
    public void EnumWeek() {
//        열거형 변수 정의
        Week today = null;

//        달력 객체 : Calendar
        Calendar calendar = Calendar.getInstance(); // 달력 객체 가져오기
        int week = calendar.get(Calendar.DAY_OF_WEEK); // 현재 요일(1 ~ 7 숫자)
//        조건식
        switch (week) {
            case 1:
                today = Week.SUNDAY; break;
            case 2:
                today = Week.MONDAY; break;
            case 3:
                today = Week.TUESDAY; break;
            case 4:
                today = Week.WEDNESDAY; break;
            case 5:
                today = Week.THURSDAY; break;
            case 6:
                today = Week.FRIDAY; break;
            case 7:
                today = Week.SATURDAY; break;
        }
        System.out.println("오늘 요일 : " + today);
    }
}
