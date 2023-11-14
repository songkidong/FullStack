package com.example.simpledms.model.entity.auth;

import com.example.simpledms.model.common.BaseTimeEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * packageName : com.example.simpledms.model.entity.auth
 * fileName : User
 * author : GGG
 * date : 2023-11-14
 * description : 유저 엔티티
 * 요약 :
 *      1) 기본키 : email(로그인 id)
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-14         GGG          최초 생성
 */
@Entity
@Table(name = "TB_USER")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User extends BaseTimeEntity {
//    속성 : TB_USER 테이블 참고
//    EMAIL       VARCHAR2(1000) NOT NULL CONSTRAINT PK_USER PRIMARY KEY, -- id (email)
//    PASSWORD    VARCHAR2(1000),                                         -- 암호
//    USERNAME    VARCHAR2(1000),                                         -- 유저명
//    CODE_NAME   VARCHAR2(1000),
    @Id
    private String email;       // 기본키
    private String password;
    private String username;
    private String codeName;    // 권한컬럼(속성) : ROLE_USER, ROLE_ADMIN

//    생성자 : 매개변수 3개짜리(권한컬럼(codeName)제외)
    public User(String email, String password, String username) {
        this.email = email;
        this.password = password;
        this.username = username;
    }
}