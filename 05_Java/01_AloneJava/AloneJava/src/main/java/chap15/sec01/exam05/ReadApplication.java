package chap15.sec01.exam05;

import java.io.FileInputStream;
import java.io.InputStream;

/**
 * packageName : chap15.sec01.exam05
 * fileName : ReadApplication
 * author : GGG
 * date : 2023-09-27
 * description : 배열의 크기만큼 파일에서 읽기
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-27         GGG          최초 생성
 */
public class ReadApplication {
    public static void main(String[] args) throws Exception{
//      TODO: 파일 읽기용(입력)으로 접근
        InputStream inputStream =
                new FileInputStream("src/main/resources/test2.db");

//      TODO: 성능향상 : 1byte -> 여러 byte씩 한번에 읽기
        byte[] buffer = new byte[100];

//      TODO: 무한 반복문
        while (true) {
//            TODO: 파일 읽기 : buffer(배열크기만큼)
//              => buffer : 파일에서 읽은 내용이 자정
//              => 리턴 : 파일에서 읽은 byte수가 리턴됨, 파일의 끝 : -1
            int data = inputStream.read(buffer);
            if(data == -1) break; // 종료 조건
//            TODO: 읽은 내용 화면 출력 : buffer 배열 출력, data(읽은 파일 byte수)
            for (int i = 0; i < data; i++) {
                System.out.println(buffer[i]);
            }
        }
        inputStream.close(); // 파일 닫기
    }
}
