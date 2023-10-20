package chap15.sec01.exam04;

import java.io.FileInputStream;
import java.io.InputStream;

/**
 * packageName : chap15.sec01.exam04
 * fileName : ReadApplication
 * author : GGG
 * date : 2023-09-27
 * description : 1byte씩 파일 읽기 (byte 파일 : 이진 파일(binary file))
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-27         GGG          최초 생성
 */
public class ReadApplication {
    public static void main(String[] args) throws Exception{
//      TODO: 파일 읽기용(==입력용) 파일 접근
        InputStream inputStream =
                new FileInputStream("src/main/resources/test1.db");

//      TODO: 반복문으로 1byte씩 읽고 화면에 출력하기
        while (true) {
//      TODO: 파일 읽기(1byte) => 리턴 : 읽은 값(1byte)이 리턴됨(1byte씩 자동증가)
//                                => 읽은 값이 파일의 끝이라면 -1 리턴됨
            int data = inputStream.read();
//      TODO: 반복문 종료 조건 : 파일의 끝
            if(data == -1) break;
//      TODO: 화면 출력
            System.out.println(data);
        }
//      TODO: 파일 닫기
        inputStream.close();
    }
}
