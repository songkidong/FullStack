package chap09.sec02.exam03;

/**
 * packageName : chap09.sec02.exam03
 * fileName : Anonymous
 * author : GGG
 * date : 2023-10-02
 * description : 익명 객체 안에서의 지역 변수 사용시 주의점
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-02         GGG          최초 생성
 */
public class Anonymous {
    private int field; // 속성
    public void method(int arg) {
//        TODO: 지역 변수, 매개 변수 -> 상수(final)
        int var1 = 0;
//        var1 = 1; // 수정 불가
//        arg = 2; // 수정 불가
//        TODO: 익명 객체 생성
        Calculator calculator = new Calculator() {
            @Override
            public int sum() {
                int result = arg + var1;
                return result;
            }
        };
    }
}
