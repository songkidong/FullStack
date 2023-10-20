package com.example.jpacustomexam.repository;

import com.example.jpacustomexam.dto.EmpGroupDto;
import com.example.jpacustomexam.model.Emp;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * packageName : com.example.jpacustomexam.repository
 * fileName : EmpRepository
 * author : GGG
 * date : 2023-10-17
 * description : 사원 레포지토리 (기본 CRUD 함수)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-17         GGG          최초 생성
 */
@Repository
public interface EmpRepository extends JpaRepository<Emp, Integer> {
//  JPA : ORM(Object-Relational Mapping) 프레임워크
//  개발자 직접 sql 작성 하는 기능(JPQL) : 1) 쿼리메소드
//                                     2) @Query 쓰는 방법
//  -------------------------------------------------------------------
//  쿼리메소드 예제
//  -------------------------------------------------------------------
//  TODO: 연습 1) 전체 조회 + 정렬(내림차순)
    List<Emp> findAllByOrderByEnoDesc();

//  TODO: 연습 2) 전체 조회 + 오름차순(ename) : Asc 생략가능
    List<Emp> findAllByOrderByEname();

//  TODO: 연습 3) ename like 검색
    List<Emp> findAllByEnameContaining(String ename);

//  TODO: 응용 연습문제
//  TODO: 연습 4) EMP 테이블에서 job 이 manager 이고 매개변수로 부서번호(dno)를 받는 함수를 작성하세요.
    List<Emp> findAllByJobAndDno(String job, int dno);

//  TODO: 연습 5) EMP 테이블에서 salary 가 1000 ~ 1500 사이의 값을 같는 사원을 조회하려고 합니다. 함수를 작성하세요.
    List<Emp> findAllBySalaryBetween(int first, int last);

//  TODO: 연습 6) EMP 테이블에서 job 이 manager 인 사원의 정보를 출력하는 함수를 작성하세요.
//    단, job 의 매개변수는 소문자 또는 대문자가 들어올 수 있음
    List<Emp> findAllByJobIgnoreCase(String job);

//  TODO: 연습 7) commission 을 받는 사원을 모두 출력하는 함수를 작성하세요.
    List<Emp> findAllByCommissionIsNotNull();

//  TODO: 연습 8) salary desc, ename asc 로 정렬하는 함수를 작성하세요.
    List<Emp> findAllByOrderBySalaryDescEnameAsc();

//  TODO: 연습 9) salary > 1000 또는 salary > 1500 사이에 해당하는 사원을 출력하는 함수를 작성하세요.
    List<Emp> findAllBySalaryLessThanOrSalaryGreaterThan(int first, int last);
//  TODO: 연습 10) commission 이 300 이거나 500 또는 1500 인 사원을 출력하는 함수를 작성하세요.
    List<Emp> findAllByCommissionOrCommissionOrCommission(int first, int second, int third);

//  -------------------------------------------------------------------
//  @Query 예제 : 1) 오라클 쿼리 2) 객체 쿼리
//  -------------------------------------------------------------------

//  TODO: 1) ename like 검색 : 추천
    @Query(value = "SELECT TD.* FROM TB_EMP TD WHERE TD.ENAME LIKE '%' || :ename || '%' "
        , nativeQuery = true)
    List<Emp> selectByEname(@Param("ename") String ename);

//  TODO: 2) salary 내림차순, ename 오름차순으로 정렬
    @Query(value = "SELECT E.* FROM TB_EMP E " + "ORDER BY E.SALARY DESC, E.ENAME ASC ", nativeQuery = true)
    List<Emp> selectDesc();

//  TODO: 3) commission 이 null 이고 salary 매개변수 값보다 같거나 큰 사원 정보를 모두 출력하세요.
    @Query(value = "SELECT * FROM TB_EMP " +
            "WHERE COMMISSION IS NULL " +
            "AND SALARY >= :salary ", nativeQuery = true)
    List<Emp> selectSalary(@Param("salary") int salary);

//  TODO: 4) 1982년도에 입사한 사원 출력하기, 입사일 내림차순
    @Query(value =  "SELECT * FROM TB_EMP " +
            "WHERE HIREDATE BETWEEN :first AND :last "
            , nativeQuery = true)
    List<Emp> selectHiredate(@Param("first") String first,
                             @Param("last") String last);

//  TODO: 5) dno, job 별 월급여의 합을 출력하는 함수를 작성하세요.(tb_emp)
    @Query(value = "SELECT dno, job, SUM(SALARY) AS salary " +
            "FROM TB_EMP " +
            "GROUP BY DNO, JOB ", nativeQuery = true)
    List<EmpGroupDto> selectGroupDnoJob();

//  TODO: 6) dno 별 월급여의 평균을 출력하는 함수를 작성하세요.
//    단, 소수점 절삭(버림, trunc) 하세요
    @Query(value = "SELECT DNO, TRUNC(AVG(SALARY)) AS avgSalary " +
            "FROM TB_EMP " +
            "GROUP BY DNO ", nativeQuery = true)
    List<EmpGroupDto> selectGroupDnoTrunc();

//  TODO: 7) 사원의 수와 최고월급을 출력하세요.
//    nativeQuery = true 사용,
//    dto : EmpGroupDto
    @Query(value = "SELECT COUNT(ENO) AS countEno, " +
            "MAX(SALARY) AS sumSalary " +
            "FROM TB_EMP "
            , nativeQuery = true)
    List<EmpGroupDto> selectGroupSumMax();

//  TODO: 8) 사원 테이블에서 가장 오래된 입사일과 가장 빠른 입사일을 출력하세요.
//    nativeQuery = true 사용,
//    dto : EmpGroupDto
    @Query(value = "SELECT MAX(HIREDATE) AS maxHiredate, " +
            "       MIN(HIREDATE) AS minHiredate " +
            "FROM TB_EMP "
            , nativeQuery = true)
    List<EmpGroupDto> selectGroupHiredate();

//  -------------------------------------------------------------------
//  페이징 연습
//  -------------------------------------------------------------------
//  1) ename like 검색 함수를 만드세요 : 쿼리메소드
//    단, 페이징 처리를 하세요
    Page<Emp> findAllByEnameContaining(String ename, Pageable pageable);

//  2) findAll() : 페이징 기능을 추가하세요 : 기본함수


//  -------------------------------------------------------------------
//   @Query 페이징
//  -------------------------------------------------------------------
//  연습2) ename like 검색 함수를 만드세요 : @Query
    @Query(value = "SELECT E.* FROM TB_EMP E " +
            "WHERE E.ENAME LIKE '%' || :ename || '%' "
            , countQuery = "SELECT count(*) FROM TB_EMP E " +
            "WHERE E.ENAME LIKE '%' || :ename || '%' "
            , nativeQuery = true)
    Page<Emp> selectEnamePage(@Param("ename") String ename, Pageable pageable);

}
