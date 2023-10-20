package com.example.controllerexam.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * packageName : com.example.controllerexam.model
 * fileName : Dept
 * author : GGG
 * date : 2023-10-05
 * description : 부서 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-05         GGG          최초 생성
 */
// TODO: Lombok 라이브러리 : 유용한 @(어노테이션) 모은 라이브러리
//       @setter : setter 함수를 만들어주는 어노테이션
//       @getter : getter 함수를 만들어주는 어노테이션
//       @Tostring : toString 재정의 함수 자동으로 만들어주는 어노테이션
//       @AllArgsConstructor : 모든 속성을 가진 생성자 자동 정의

@Setter
@Getter
@ToString
@AllArgsConstructor
public class Dept {
//    TODO: 속성, 생성자, 함수(getter/setter)
    int dno; // 부서번호
    String dname; // 부서명
    String loc; // 부서위치
}
