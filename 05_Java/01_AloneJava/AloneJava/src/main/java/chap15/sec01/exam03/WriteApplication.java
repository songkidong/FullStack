package chap15.sec01.exam03;

import java.io.FileOutputStream;
import java.io.OutputStream;

/**
 * packageName : chap15.sec01.exam03
 * fileName : WriteApplication
 * author : GGG
 * date : 2023-09-27
 * description : 배열 중 일부 데이터만 파일에 쓰기
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
                new FileOutputStream("src/main/resources/test3.txt");

//      TODO: 배열 일부만 쓰기
//        사용법 : outputStream.write(배열변수, 시작인덱스, 개수);
        byte[] array = {10, 20, 30, 40, 50};
        outputStream.write(array, 1, 3); // 20, 30, 40
        
//      TODO: 버퍼 -> 파일
        outputStream.flush();
        outputStream.close(); // 파일 닫기
    }
}
