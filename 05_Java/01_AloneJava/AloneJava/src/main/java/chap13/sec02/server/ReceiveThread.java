package chap13.sec02.server;

import java.io.DataInputStream;
import java.io.IOException;
import java.net.Socket;
import java.net.SocketException;

/**
 * packageName : chap12.chatting.server
 * fileName : ReceiveThread
 * author : ds
 * date : 2022-10-06
 * description : 글자받기(Receiver) 쓰레드
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2022-10-06         ds          최초 생성
 */
public class ReceiveThread extends Thread {
//  TODO: 네트웍 pc 통신 소켓 정의
    public final Socket socket; // 상수(값 설정)

//  TODO: 생성자
    public ReceiveThread(Socket socket) {
        this.socket = socket;
    }

//  TODO: 쓰레드 실행 함수 : run()
    @Override
    public void run() {
        try {
//          TODO: 보조스트림 : DataInputStream : 기본 자료형을 사용하게 하는 기능
//            byte 입력용 : InputStream
//            byte 출력용 : OutputStream
//            사용법 : new DataInputStream(기본스트림)
//            네트웍/파일 : 쓰기/읽기 동시에 할 수 없음
            DataInputStream dataInputStream = new DataInputStream(socket.getInputStream());
            String receiveString;
            while (true) {
//              TODO: readUTF() : 문자열로 읽기 함수
                receiveString = dataInputStream.readUTF();
//              TODO: 보낸 메세지 화면 출력
                System.out.println("상대방 : " + receiveString);
            }
        } catch (SocketException e1) {
            System.out.println("상대방 연결이 종료되었습니다.");
        } catch (IOException e2) {
            e2.getStackTrace();
        }
    }
}









