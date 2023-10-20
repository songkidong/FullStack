package com.example.mybatisexam.model.vo;

import com.example.mybatisexam.model.common.BaseTimeEntity;
import lombok.*;

/**
 * packageName : com.example.mybatisexam.model.vo
 * fileName : Dept
 * author : GGG
 * date : 2023-10-12
 * description : 부서 클래스 == 부서 테이블 유사
 * 요약 :
 *      vo(Value Object) : 테이블과 동일하게 만듬
 *      dto(Data Transfer Object) : 테이블 + 가공컬럼(속성)
 *      (oracle 12 이상만 가능)
 *      OFFSET #{pageReq.page} * #{pageReq.size} ROWS FETCH FIRST #{pageReq.size} ROWS ONLY
 *      예) 현재 페이지 번호(page) = 0, 1 페이지당 개수(size) = 10
 *      0 * 10 = 0 (db 건수 0개 건너뛰고)
 *      10       10 (10 개를 화면에 출력하세요)
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-12         GGG          최초 생성
 */
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Dept extends BaseTimeEntity {
    private Integer dno; // 부서번호
    private String dname; // 부서이름
    private String loc; // 부서위치
}
