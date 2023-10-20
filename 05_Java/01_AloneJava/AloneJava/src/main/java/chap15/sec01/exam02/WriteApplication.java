package chap15.sec01.exam02;

import java.io.FileOutputStream;
import java.io.OutputStream;

/**
 * packageName : chap15.sec01.exam02
 * fileName : WriteApplication
 * author : GGG
 * date : 2023-09-27
 * description : 1byte 배열을 파일에 쓰기(출력)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-27         GGG          최초 생성
 */
public class WriteApplication {
    public static void main(String[] args) throws Exception{
//      TODO: 파일을 쓰기용(출력용)으로 열기
        OutputStream outputStream =
                new FileOutputStream("src/main/resources/test2.db");

//      TODO: 배열 준비
        byte[] array = {10, 20, 30};

//      TODO: 배열 -> 파일(버퍼)에 쓰기 : outputStream.write(배열);
        outputStream.write(array);

//      TODO: 버퍼 내용 -> 진짜 파일 쓰기
        outputStream.flush();

//      TODO: 파일 닫기
        outputStream.close();
    }
}
