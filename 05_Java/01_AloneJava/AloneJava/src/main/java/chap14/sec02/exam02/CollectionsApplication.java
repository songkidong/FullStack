package chap14.sec02.exam02;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * packageName : chap14.sec02.exam02
 * fileName : CollectionsApplication
 * author : GGG
 * date : 2023-09-27
 * description : Collection 클래스 : 자료구조의 대표 클래스
 *              유용한 함수들 소개
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-27         GGG          최초 생성
 */
public class CollectionsApplication {
    public static void main(String[] args) {
        List list = new ArrayList(); // 빈 배열

//      TODO: 1) 데이터 넣기
//        사용법 : Collections.addAll(자료구조변수, 배열원소,...);
        System.out.println("---- 데이터 넣기 ----");
        Collections.addAll(list, 1,2,3,4,5);
        System.out.println(list); // 1,2,3,4,5

//      TODO: 2) 오른쪽으로 값을 두 칸 이동
//        사용법 : Collections.rotate(자료구조변수, 이동칸숫자);
        System.out.println("---- 오른쪽으로 값을 두 칸 이동 ----");
        Collections.rotate(list, 2);
        System.out.println(list); // 4,5,1,2,3

//      TODO: 3) 배열의 원소의 값 서로 맞바꾸기
//        사용법 : Collections.swap(자료구조변수, 원본인덱스, 바꿀인덱스);
        System.out.println("---- 배열의 원소의 값 서로 맞바꾸기 ----");
        Collections.swap(list, 0, 2);
        System.out.println(list); // 1,5,4,2,3

//      TODO: 4) 배열 원소 무작위로 섞기
        System.out.println("---- 배열 원소 무작위로 섞기 ----");
        Collections.shuffle(list);
        System.out.println(list);

//      TODO: 5) 정렬 : 오름차순
        System.out.println("---- 정렬 : 오름차순 ----");
        Collections.sort(list);
        System.out.println(list); // 1,2,3,4,5

//      TODO: 6) 정렬 : 내림차순
        System.out.println("---- 정렬 : 내림차순 ----");
        Collections.sort(list, Collections.reverseOrder());
        System.out.println(list); // 5,4,3,2,1

//      TODO: 7) 이진 탐색(미리 오름차순하고 실행)
//        사용법 : Collections.binarySearch(자료구조변수, 찾을값) => 리턴: 인덱스번호

//      TODO: 8) 최대값 / 최소값 찾기
        System.out.println("---- 최대값 / 최소값 찾기 ----");
        System.out.println(Collections.max(list)); // 최대값
        System.out.println(Collections.min(list)); // 최소값

//      TODO: 기타) Collections.replaceAll(자료구조, 원본값, 바꿀값);
    }
}
