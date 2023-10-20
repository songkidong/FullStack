package chap07.sec01.exam04;

/**
 * packageName : chap07.sec01.exam04
 * fileName : DmbCellPhone
 * author : GGG
 * date : 2023-09-21
 * description : 자식 클래스 : tv 수신 기능, 채널 기능
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-21         GGG          최초 생성
 */
public class DmbCellPhone extends CellPhone {
//    속성
    int channel; // tv 채널 속성

//    생성자 : 부모 + 자식 속성 모두
    public DmbCellPhone(String model, String color, int channel) {
        this.model = model; // 부모 속성
        this.color = color; // 부모 속성
        this.channel = channel; // 자식 속성
    }

//    전원켜기/끄기 등은 상속 받았으므로 정의할 필요없음
//    함수
    /**
     * tv 수신하는 함수
     */
    void turnOnDmb() {
        System.out.println("채널 : " + channel + "번 방송을 시작합니다.");
    }

    /**
     * 채널 돌리는 함수
     */
    void changeChannelDmb(int channel) {
        this.channel = channel;
        System.out.println("채널 : " + channel + "번으로 돌립니다.");
    }

    /**
     * tv 수신 멈추는 함수
     */
    void turnOffDmb() {
        System.out.println("DMB 방송 수신을 멈춥니다.");
    }
}
