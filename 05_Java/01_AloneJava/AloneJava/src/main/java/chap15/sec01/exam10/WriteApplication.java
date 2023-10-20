package chap15.sec01.exam10;

import java.io.FileWriter;
import java.io.Writer;

/**
 * packageName : chap15.sec01.exam10
 * fileName : WriteApplication
 * author : GGG
 * date : 2023-09-27
 * description : 문자열을 파일에 쓰기
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-27         GGG          최초 생성
 */
public class WriteApplication {
    public static void main(String[] args) throws Exception {
//      TODO: 파일 생성(문자기반)
        Writer writer = new FileWriter("src/main/resources/test10.txt");
        
//      TODO: 문자열 준비
        String str = "ABC";
        
//      TODO: 파일에 쓰기
        writer.write(str);
        
//      TODO: 임시버퍼 -> 진짜 쓰기
        writer.flush();
        writer.close(); // 파일 닫기
    }
}
