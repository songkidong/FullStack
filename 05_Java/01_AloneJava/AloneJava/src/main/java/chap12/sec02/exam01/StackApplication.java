package chap12.sec02.exam01;

import java.util.Stack;

/**
 * packageName : chap12.sec02.exam01
 * fileName : StackApplication
 * author : GGG
 * date : 2023-09-26
 * description : 스택(Stack)에 대한 소개 예제
 * 요약 :
 *      Stack(스택) : LIFO(last in first out) -> 코딩 : Stack 클래스
 *      Queue(큐) : FIFO(first in first out) -> 코딩 : LinkedList 사용
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-26         GGG          최초 생성
 */
public class StackApplication {
    public static void main(String[] args) {
//        TODO: 스택 객체 정의
        Stack<Coin> coinStack = new Stack<>();
        
//        TODO: Coin 객체 추가 : .push(값)
        coinStack.push(new Coin(100)); // 100원 (1st)
        coinStack.push(new Coin(50)); // 50원
        coinStack.push(new Coin(500)); // 500원
        coinStack.push(new Coin(10)); // 10원 (last) => 꺼낼 때 나옴
        
//        TODO: Coin 객체 꺼내기 : .pop() (순차적으로 마지막 값을 꺼냄)
//          참고) 현재 마지막 값 조회하기 : .peek()
        while(coinStack.isEmpty() == false) {
            Coin coin = coinStack.pop(); // 마지막 코인 꺼내기
//            출력
            System.out.println("꺼낸 동전 : " + coin.getValue() + "원");
        }
    }
}
