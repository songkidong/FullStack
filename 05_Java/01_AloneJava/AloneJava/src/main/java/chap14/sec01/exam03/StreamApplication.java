package chap14.sec01.exam03;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * packageName : chap14.sec01.exam03
 * fileName : StreamApplication
 * author : GGG
 * date : 2023-09-27
 * description : Stream 클래스 : 함수형 프로그래밍 기법 받아들임
 * 요약 :
 *      1) Stream 은 함수형 프로그래밍에서 차용한 클래스로 내부적으로 반복문이 자동 실행됨
 *      2) Stream 은 정렬된 결과를 자료구조(컬렉션프레임워크)로 결과 내보내기가 가능
 *      3) Stream 은 함수(메소드) 체이닝을 이용 (jquery 사용)
 *          예) 함수체이닝 : 함수().함수2()...
 *      4) Stream 원본을 조작하지 않고 복사본을 사용함
 *      5) Stream 사용 규칙 : (1) 정의 (2) 가공 (3) 결과내보내기 : 3단계 규칙
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-27         GGG          최초 생성
 */
public class StreamApplication {
    public static void main(String[] args) {
//       TODO: 샘플 ArrayList
        List<String> list = new ArrayList<>();
        list.add("apple");
        list.add("ball");
        list.add("car");
        list.add("daddy");
        list.add("ear");
        list.add("fox");

//      TODO: 단순 출력 : forEach
//        list.forEach(System.out::println);
//        사용법 : 매개변수 -> 실행문(매개변수); // 람다식(화살표함수)
        list.forEach(s -> System.out.println(s));

//      TODO: map 함수
//        예제 : 리스트 값들을 모두 대문자로 변경
        System.out.println("----- map 함수 ------");
//      TODO: 스트림 사용
//           1) 정의 : list.stream()
//           2) 가공 : .map(s -> s.toUpperCase())
//           3) 결과내보내기 : .collect(Collectors.toList());
//              .collect(자료구조)
//              => Collectors.toList() : 리스트 로 내보내기
        List<String> list2 = list.stream()
                .map(s -> s.toUpperCase())
                .collect(Collectors.toList());
//       결과 출력
        list2.forEach(s -> System.out.println(s));

//      TODO: filter 함수 (배열의 값을 조작 : 배열의 개수 다름)
//        예제 : 문자의 길이가 3자 이상만 뽑아내기
        System.out.println("----- filter 함수 ------");
        List<String> list3 = list.stream()
                .filter(s -> s.length() > 3)
                .collect(Collectors.toList());
//       결과 출력
        list3.forEach(s -> System.out.println(s));

//      TODO: (참고) array 로 내보내기
        System.out.println("----- array 로 내보내기 ------");
        Object[] obj = list.stream()
                .filter(s -> s.length() > 4)
                .toArray();
        for (Object o: obj) {
            System.out.println((String) o);
        }
    }
}
