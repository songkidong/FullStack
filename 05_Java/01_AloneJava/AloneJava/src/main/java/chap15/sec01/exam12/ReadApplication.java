package chap15.sec01.exam12;

import java.io.FileReader;
import java.io.Reader;

/**
 * packageName : chap15.sec01.exam12
 * fileName : ReadApplication
 * author : GGG
 * date : 2023-09-27
 * description : 배열의 길이만큼 읽기
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-27         GGG          최초 생성
 */
public class ReadApplication {
    public static void main(String[] args) throws Exception {
//      TODO: 파일 읽기용으로 접근(문자기반)
        Reader reader =
                new FileReader("src/main/resources/test8.txt");
        
//      TODO: 버퍼 배열 준비 : 속도 향상 -> 배열크기만큼 1번에 읽기
        char[] buffer = new char[100];
        
//      TODO: 무한 반복문
        while (true) {
//            TODO: 파일 읽기(배열크기만큼) : buffer에 읽은 내용이 저장됨
//                    리턴 : 읽은 문자수, 파일의 끝 : -1
            int readNum = reader.read(buffer);
//            TODO: 종료 조건
            if(readNum == -1) break;
//            TODO: 화면 출력
            for (int i = 0; i < readNum; i++) {
                System.out.println(buffer[i]);
            }
        }
        reader.close(); // 파일 닫기
    }
}
