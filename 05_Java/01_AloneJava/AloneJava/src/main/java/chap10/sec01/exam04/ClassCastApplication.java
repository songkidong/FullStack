package chap10.sec01.exam04;

/**
 * packageName : chap10.sec01.exam04
 * fileName : ClassCastApplication
 * author : GGG
 * date : 2023-09-26
 * description : Class Cast 에러[예외](Exception)
 *              => 클래스 형변환시 적절한 클래스를 안넣으면 에러 발생
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-26         GGG          최초 생성
 */
public class ClassCastApplication {
    public static void main(String[] args) {
//        강아지 객체 생성
        Dog dog = new Dog();
        changeDog(dog); // 가능(매개변수의 다형성)

//        TODO: Class Cast 에러 발생 코드
//          고양이 객체 생성
        Cat cat = new Cat();
        changeDog(cat); // 에러 : why? 강아지 객체를 넣어야함
    }

//    공유 함수
    public static void changeDog(Animal animal) {
//        강제 형번환 : Dog
        Dog dog = (Dog)animal;
    }
}

// 동물 클래스
class Animal{}
// 강아지
class Dog extends Animal{}
// 고양이
class Cat extends Animal{}
