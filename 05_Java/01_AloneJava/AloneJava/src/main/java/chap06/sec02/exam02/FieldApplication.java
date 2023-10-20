package chap06.sec02.exam02;

/**
 * packageName : chap06.sec02.exam02
 * fileName : FieldApplication
 * author : GGG
 * date : 2023-09-20
 * description : 실행 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class FieldApplication {
    public static void main(String[] args) {
//        객체 생성 : new 연산자(힙공간에 해당객체를 생성함)
//        TODO: 클래스명 명명법 : 첫글자 대문자 나머지 소문자, 단어사이는 대문자(파스칼표기법)
//        사용법 : 클래스명 객체변수명 = new 생성자함수();
        FieldInit fieldInit = new FieldInit();

//        TODO: 예제 : fieldInit 객체변수의 모든 속성 출력하세요
        System.out.println("byte : " + fieldInit.bField);
        System.out.println("short : " + fieldInit.sField);
        System.out.println("int : " + fieldInit.iField);
        System.out.println("long : " + fieldInit.lField);

        System.out.println("float : " + fieldInit.fField);
        System.out.println("double : " + fieldInit.dField);

        System.out.println("char : " + fieldInit.cField);
        System.out.println("boolean : " + fieldInit.boField);

        System.out.println("String : " + fieldInit.strField);
        System.out.println("int[] : " + fieldInit.arrField);

    }
}
