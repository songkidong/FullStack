package chap15.sec01.exam01;

import java.io.FileOutputStream;
import java.io.OutputStream;

/**
 * packageName : chap15.sec01.exam01
 * fileName : WriteApplication
 * author : GGG
 * date : 2023-09-27
 * description :
 * 요약 :
 *      스트림 뜻 : 가상의 통로
 *      입출력 스트림(InputStream/OutputStream) : 자바에서 데이터는 스트림을
 *      통해 입출력이 이루어짐, 읽기용(Input)/쓰기용(Output)에 따라 각자 클래스를 만듬
 *      => 대표 4가지 부모 클래스 소개
 *      InputStream : 1byte 기반 입력(==읽기용), 최상위 추상 클래스
 *      OutputStream : 1byte 기반 출력(==쓰기용), 최상위 추상 클래스
 *      Reader : 문자 기반(char:2byte) 입력(==읽기용), 최상위 추상 클래스
 *      Writer : 문자 기반(char:2byte) 출력(==쓰기용), 최상위 추상 클래스
 *      활용 : InputStream/OutputStream : 주로 멀티미디어 파일(동영상, 이미지 등)
 *            Reader/Writer : 주로 텍스트 파일에 활용
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-27         GGG          최초 생성
 */
public class WriteApplication {
    public static void main(String[] args) throws Exception{
//      TODO: 파일 출력용(==쓰기용) 객체 생성
//        자식 클래스 : FileOutputStream
//        사용법 : OutputStream outputStream = new FileOutputStream("경로");
//        gradle(빌드) 의 기본경로(root 경로) : build.gradle 파일이 있는 위치
        OutputStream outputStream
                = new FileOutputStream("src/main/resources/test1.db");

        byte a = 10;
        byte b = 20;
        byte c = 30;
        
//      TODO: 파일에 쓰기 : outputStream.write(값)
//        버퍼(buffer) : 임의의 메모리 배열 공간 : 값을 저장
//        장점 : 파일입출력에 바로 접근하는 행위 : 속도가 굉장히 느림
//          => 임시배열(buffer)에 모아놓고 한번에 파일에 쓰기를 함
        outputStream.write(a);
        outputStream.write(b);
        outputStream.write(c);

//      TODO: 버퍼에 내용을 진짜 파일에 쓰기
        outputStream.flush();

//      TODO: 파일 닫기(무조건)
        outputStream.close();
    }
}
