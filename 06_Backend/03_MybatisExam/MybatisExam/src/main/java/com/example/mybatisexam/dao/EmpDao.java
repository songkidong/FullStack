package com.example.mybatisexam.dao;

import com.example.mybatisexam.model.common.PageReq;
import com.example.mybatisexam.model.vo.Emp;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.mybatisexam.dao
 * fileName : EmpDao
 * author : GGG
 * date : 2023-10-12
 * description : 사원 Dao (Mybatis mapper : @Mapper 사용)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-12         GGG          최초 생성
 */
@Mapper
public interface EmpDao {
    /** 전체 조회 : 사원명 like 기능 있음 */
    public List<Emp> findByEnameContaining(
            @Param("ename") String ename,
            PageReq pageReq
    );

    /** 전체 테이블 개수 세기 함수 */
    long countByEname(String ename);

    /** 상세조회(1건조회) */
    Optional<Emp> findById(int eno);

    /** 저장 함수 */
    int insert(Emp emp);

    /** 수정함수 */
    int update(Emp emp);

    /** 삭제함수 */
    int deleteById(int eno);

    /** 기본키(eno) 가 있는지 확인하는 조회함수 */
    long existById(int eno);

    /** TODO: dynamic sql 조회 */
    public List<Emp> findByDynamicContaining(
            @Param("ename") String ename,
            @Param("job") String job,
            @Param("manager") Integer manager,
            PageReq pageReq
    );

    /** TODO: dynamic sql count 조회 */
    public long countByDynamic(
            @Param("ename") String ename,
            @Param("job") String job,
            @Param("manager") Integer manager
    );
}
