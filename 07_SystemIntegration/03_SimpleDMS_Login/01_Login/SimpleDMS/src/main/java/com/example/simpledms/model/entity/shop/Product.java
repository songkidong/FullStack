package com.example.simpledms.model.entity.shop;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

/**
 * packageName : com.example.simpledms.model.entity.shop
 * fileName : Product
 * author : GGG
 * date : 2023-11-08
 * description : Product 엔티티 클래스
 * 요약 :
 *      1) 삭제 없음
 *      2) 공통 컬럼 없음
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-08         GGG          최초 생성
 */
@Entity
@Table(name = "TB_PRODUCT")
@SequenceGenerator(
        name = "SQ_PRODUCT_GENERATOR"
        , sequenceName = "SQ_PRODUCT"
        , initialValue = 1
        , allocationSize = 1
)
@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
@DynamicUpdate
public class Product {
//    속성
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE
            , generator = "SQ_PRODUCT_GENERATOR"
    )
    private Integer pno;       // 기본키(@Id), 시퀀스

    private Integer kindCode;  // 상품종류코드

    private String pname;      // 상품명

    private String image;      // 이미지 경로

    private Integer unitPrice; // 단가

    private Integer statusCode; // 상품상태코드(20001(신상), 20002(이월상품), 20003(전시품))

    private String useYn;      // 사용여부
}
