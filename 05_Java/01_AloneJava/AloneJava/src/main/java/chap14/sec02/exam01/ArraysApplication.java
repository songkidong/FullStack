package chap14.sec02.exam01;

import java.util.Arrays;

/**
 * packageName : chap14.sec02.exam01
 * fileName : ArraysApplication
 * author : GGG
 * date : 2023-09-27
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-27         GGG          최초 생성
 */
public class ArraysApplication {
    public static void main(String[] args) {
        int[] arr = {0,1,2,3,4};
        int[][] arr2D = {{11,12,13}, {21,22,23}};

//      TODO: Arrays : 자바에서 배열을 대표하는 클래스(유용한 함수들 다수)
//      TODO: 1) 배열 -> 문자열로 변환
        System.out.println(Arrays.toString(arr)); // 1차원 배열 출력
        System.out.println(Arrays.deepToString(arr2D)); // 2차원 배열 출력

//      TODO: 2) 배열 복사
        int[] arr2 = Arrays.copyOf(arr, arr.length); // 전체 복사(깊은)
        int[] arr3 = Arrays.copyOfRange(arr, 2, 4); // 2 ~ (4-1) 복사
        System.out.println(Arrays.toString(arr2));
        System.out.println(Arrays.toString(arr3));

//      TODO: 3) 배열 동등 비교
        System.out.println("----- 배열 동등 비교 -----");
        System.out.println(Arrays.equals(arr, arr2)); // true (다르면 false)

//      TODO: 4) 배열 오름차순 정렬
        System.out.println("----- 배열 오름차순 정렬 -----");
        char[] chArr = {'E', 'D', 'C', 'B', 'A'};
        Arrays.sort(chArr);
        System.out.println(Arrays.toString(chArr));

//      TODO: 5) 이진 탐색(검색, 조회) : 리턴값 : 인덱스번호
//        사용시 : 미리 정렬되어야 함
        System.out.println("B의 인덱스번호 : " + Arrays.binarySearch(chArr, 'B'));
    }
}
