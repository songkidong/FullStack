package chap10.sec02.exam03;

/**
 * packageName : chap10.sec02.exam03
 * fileName : CatchByCatchApplication
 * author : GGG
 * date : 2023-09-26
 * description : Catch 2개 이상 있는 에러(예외) 처리
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-26         GGG          최초 생성
 */
public class CatchByCatchApplication {
    public static void main(String[] args) {
        try {
            //        TODO: Out of Bound 에러 발생시키는 코드
//         현재 main 의 매개변수는 기본적으로 없음
            String data1 = args[0];
            String data2 = args[1];

            System.out.println(data1); // 에러 발생
            System.out.println(data2);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("실행 매개변수 값이 부족합니다.");
        } catch (NumberFormatException e) {
            System.out.println("숫자로 변환할 수 없습니다.");
        } catch (Exception e) {
//          TODO: Exception 개발자 에러의 최고 조상 클래스 : 기본 에러로 설정하면 거의 탐지됨
            System.out.println("그외에 다른 에러가 발생했습니다.");
        }

    }
}