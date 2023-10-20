package chap15.sec01.exam06;

import java.io.FileInputStream;
import java.io.InputStream;

/**
 * packageName : chap15.sec01.exam06
 * fileName : ReadApplication
 * author : GGG
 * date : 2023-09-27
 * description : 파일에서 지정된 길이만큼만 읽기
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-27         GGG          최초 생성
 */
public class ReadApplication {
    public static void main(String[] args) throws Exception{
//      TODO: 파일 읽기로(입력용) 열기
        InputStream inputStream =
                new FileInputStream("src/main/resources/test3.txt");

//      TODO: 읽기용 배열 크기 지정
        byte[] buffers = new byte[5];

//      TODO: 일부만 읽기 : (인덱스 2번부터 읽어서 3개 저장 buffers에다가)
        int data = inputStream.read(buffers, 2, 3);

//      TODO: 화면 출력
        if(data != -1) {
            for (int i = 0; i < buffers.length; i++) {
                System.out.println(buffers[i]);
            }
        }
        inputStream.close(); // 파일 닫기
    }
}
