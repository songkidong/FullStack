package chap07.verify.exam02;

/**
 * packageName : chap07.verify.exam02
 * fileName : Point
 * author : GGG
 * date : 2023-09-21
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-21         GGG          최초 생성
 */
public class Point {
//    속성
    int x; // 3
    int y; // 4

//    함수 : set(3,4), showPoint()
    void set(int x, int y) {
        this.x = x;
        this.y = y;
    }

    void showPoint() {
//        (3,4)
        System.out.println("(" + x + "," + y + ")");
    }
}
