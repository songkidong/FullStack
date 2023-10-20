-- 07_Subquery_Exam.sql
-- 서브쿼리(자식쿼리) 연습문제
-- 연습문제 1) (사원번호가(ENO) 7788인 사원)과 
--   담당 업무가(JOB) 같은 사원을(사원이름(ENAME),담당업무(JOB)) 표시하세요.
-- 대상 : EMPLOYEE
-- 1) (사원번호가(ENO) 7788인 사원)
SELECT JOB FROM EMPLOYEE
WHERE ENO = 7788; -- ANALYST

-- 2) ANALYST 와 같은 업무를 가진 사원 출력
SELECT ENAME, JOB FROM EMPLOYEE
WHERE JOB = 'ANALYST';

-- 서브쿼리 사용
SELECT ENAME, JOB FROM EMPLOYEE
WHERE JOB = (SELECT JOB FROM EMPLOYEE WHERE ENO = 7788);
 
-- 연습문제 2) (사원번호가(ENO) 7499인 사원)보다 
--   급여가(SALARY) 많은 사원을(사원이름(ENAME),담당업무(JOB)) 표시하세요. 
-- 대상 : EMPLOYEE
-- 1) 사원번호가(ENO) 7499인 사원의 급여(SALARY)
SELECT SALARY FROM EMPLOYEE
WHERE ENO = 7499; -- 1600

-- 2) 급여가 1600 보다 큰 사원의 사원이름(ENAME), 담당업무(JOB)를 화면에 표시
SELECT ENAME, JOB FROM EMPLOYEE
WHERE SALARY > 1600;

-- 최종쿼리
SELECT ENAME, JOB FROM EMPLOYEE
WHERE SALARY > (SELECT SALARY FROM EMPLOYEE WHERE ENO = 7499);

-- 연습문제 3) (최소(MIN) 급여를(SALARY) 받는 사원)의 이름,(ENAME) 
--    담당 업무(JOB) 및 급여(SALARY)를 표시하세요.
-- 대상 : EMPLOYEE
-- 1) 최소(MIN) 급여를(SALARY) 받는 사원의 급여
SELECT MIN(SALARY) FROM EMPLOYEE; -- 800

-- 2) 최소급여 800을 받는 사원 사원이름(ENAME), 담당업무(JOB)를 화면에 표시
SELECT ENAME, JOB, SALARY FROM EMPLOYEE
WHERE SALARY = 800;

-- 3) 최종쿼리
SELECT ENAME, JOB, SALARY FROM EMPLOYEE
WHERE SALARY = (SELECT MIN(SALARY) FROM EMPLOYEE);

-- 연습문제 4) 평균 급여가(SALARY) 가장 적은(MIN) 사원의 담당 업무(JOB)를 찾아 
--    직급과(JOB) 평균(AVG) 급여를(SALARY) 표시하세요.
--  (설명) == (담당 업무별 평균 급여가 가장 적은) 사람을 찾아 
--    직급과 평균 급여를 표시하세요.
-- 단, 소수점 나오면 반올림하기(첫째자리에서)
-- 힌트) 4-1) (담당 업무별 평균 급여가 가장 적은) 사람
SELECT MIN(ROUND(AVG(SALARY),1))
FROM EMPLOYEE
GROUP BY JOB; -- 1037.5

-- 4-2) 그 사람의 직급과 평균급여 화면에 출력 : 그 사람의 직급별 평균급여를 화면에 출력
SELECT JOB, ROUND(AVG(SALARY),1)
FROM EMPLOYEE
GROUP BY JOB
HAVING ROUND(AVG(SALARY),1) = 1037.5 ;

-- 최종쿼리
SELECT JOB, ROUND(AVG(SALARY),1)
FROM EMPLOYEE
GROUP BY JOB
HAVING ROUND(AVG(SALARY),1) = (SELECT MIN(ROUND(AVG(SALARY),1))
                               FROM EMPLOYEE
                               GROUP BY JOB);
                               
-- 연습문제 5) (각 부서의 최소(MIN) 급여(SALARY))를 받는 
--   사원의 이름(ENAME), 급여(SALARY), 부서번호(DNO)를 표시하세요.
-- 1) 각 부서의(부서별) 최소 급여를 받는 사원의 최소 급여
SELECT MIN(SALARY) FROM EMPLOYEE
GROUP BY DNO; -- 950, 1300, 800

-- 2) (950, 1300, 800) 급여를 받는 사원의 이름, 급여, 부서번호를 표시
SELECT ENAME, SALARY, DNO
FROM EMPLOYEE
WHERE SALARY IN (950, 1300, 800);

-- 최종쿼리
SELECT ENAME, SALARY, DNO 
FROM EMPLOYEE
WHERE SALARY IN (SELECT MIN(SALARY) FROM EMPLOYEE
                 GROUP BY DNO);

-- 연습문제 6) 매니저가(MANAGER) 없는 사원의 이름을(ENAME) 표시하세요.
-- 1) 매니저가 없는 사원의 사원번호
SELECT ENO FROM EMPLOYEE
WHERE MANAGER IS NULL; -- 7839

-- 2) 그 사람의 이름을 화면에 출력
SELECT ENAME FROM EMPLOYEE
WHERE ENO = 7839;

-- 최종쿼리
SELECT ENAME FROM EMPLOYEE
WHERE ENO = (SELECT ENO FROM EMPLOYEE
             WHERE MANAGER IS NULL);
             
-- 연습문제 7) 매니저가(MANAGER) 있는 사원의 이름을(ENAME) 표시하세요.
-- 단, 서브쿼리를 이용하세요
-- 1) 매니저가 있는 사원의 사원번호
SELECT ENO FROM EMPLOYEE
WHERE MANAGER IS NOT NULL; -- 여러건이 나옴

-- 2) 위에서 구한 사번들로 이름을 조회
SELECT ENAME FROM EMPLOYEE
WHERE ENO IN (SELECT ENO FROM EMPLOYEE
              WHERE MANAGER IS NOT NULL);

-- 연습문제 8) (BLAKE와 동일한 부서(DNO))에 속한 사원의 이름과(ENAME) 
--    입사일을(HIREDATE) 표시하는 질의를 작성하세요.
-- 단, BLAKE는 제외
-- 1) BLAKE 가 소속된 부서번호를 찾기
SELECT DNO FROM EMPLOYEE
WHERE ENAME = 'BLAKE'; --30

-- 2) 30번 부서에 속한 사원들의 이름과 입사일 출력
SELECT ENAME, HIREDATE FROM EMPLOYEE
WHERE DNO = (SELECT DNO FROM EMPLOYEE
             WHERE ENAME = 'BLAKE')
AND ENAME <> 'BLAKE';

-- 연습문제 9) 급여가(SALARY) (평균(AVG) 급여(SALARY))보다 많은 사원들의 
--    사원번호와(ENO) 
--    이름을(ENAME) 표시하되 결과를 급여(SALARY)에 대해서
--    오름차순으로 정렬하세요.
-- 1) 평균급여 찾기
SELECT AVG(SALARY) FROM EMPLOYEE; --2073.214285714285714285714285714285714286

-- 2) 2073.214285714285714285714285714285714286 보다 
-- 많은 급여를 받는 사원번호, 이름 출력 급여에 대해 오름차순으로 정렬
SELECT ENO, ENAME FROM EMPLOYEE
WHERE SALARY > (SELECT AVG(SALARY) FROM EMPLOYEE)
ORDER BY SALARY;

-- 연습문제 10) (이름에(ENAME) K가 포함된 사원)과 같은 부서에서(DNO) 일하는 사원의 
--   사원번호와(ENO) 이름을(ENAME) 표시하는 
-- 질의를 작성하세요.
-- 1) 이름에 K가 포함된 사원의 부서번호 조회
SELECT DNO FROM EMPLOYEE
WHERE ENAME LIKE '%K%'; -- (30, 10, 10)

-- 2) 10,30에 포함되는 부서번호를 가진 사원번호와 이름 조회
SELECT ENO, ENAME FROM EMPLOYEE
WHERE DNO IN (SELECT DNO FROM EMPLOYEE
              WHERE ENAME LIKE '%K%');

-- 연습문제 11) (부서 위치가(LOC) DALLAS인) 사원의 이름과(ENAME) 
--    부서번호(DNO) 및 담당 업무를(JOB) 표시하세요.
-- 단, 서브쿼리를 이용하세요
-- 1) 부서위치가 DALLAS 인 부서번호를 조회
SELECT DNO FROM DEPARTMENT
WHERE LOC = 'DALLAS'; -- 20

-- 2) 20 의 부서번호와 일치하는 사원의 이름, 부서번호, 담당업무 조회
SELECT ENAME, DNO, JOB FROM EMPLOYEE
WHERE DNO = (SELECT DNO FROM DEPARTMENT
             WHERE LOC = 'DALLAS');
             
-- 연습문제 12) (KING에게) 보고하는 사원의 이름과(ENAME) 급여를(SALARY) 표시하세요.
-- 힌트 : 보고하는 사원의 매니저가(MANAGER) KING 임(7839)
-- 1) KING 의 사번을 구하기
SELECT ENO FROM EMPLOYEE
WHERE ENAME = 'KING'; -- 7839

-- 2) 7839 가 MANAGER 인 사원의 사원명과 급여를 조회
SELECT ENAME, SALARY FROM EMPLOYEE
WHERE MANAGER = (SELECT ENO FROM EMPLOYEE
                 WHERE ENAME = 'KING');
                 
-- 연습문제 13) (RESEARCH 부서(DNO))의 사원에 대한 부서번호(DNO), 
--   사원이름(ENAME) 및 담당 업무(JOB)를 표시하세요.
-- 1) RESEARCH 부서의 부서번호 조회
SELECT DNO FROM DEPARTMENT
WHERE DNAME = 'RESEARCH'; -- 20

-- 2) 20 번 부서번호에 해당하는 사원의 부서번호, 사원명, 담당업무 조회
SELECT DNO, ENAME, JOB FROM EMPLOYEE
WHERE DNO = (SELECT DNO FROM DEPARTMENT
             WHERE DNAME = 'RESEARCH');
             
-- 연습문제 14(*)) 1)평균(AVG) 급여보다(SALARY) 많은 급여를 받고 (서브쿼리1)
--     2)이름에 M이 포함된 사원과(ENAME) 같은 부서에서(DNO) 근무하는(서브쿼리2)
--    사원의 사원번호(ENO), 이름(ENAME), 급여(SALARY)를 표시하세요.
-- 1) 평균급여
SELECT AVG(SALARY) FROM EMPLOYEE;

-- 2) 이름에 M이 포함된 사원의 부서번호
SELECT DNO FROM EMPLOYEE
WHERE ENAME LIKE '%M%'; -- 20, 30, 20, 30, 10

-- 최종쿼리
SELECT ENO, ENAME, SALARY FROM EMPLOYEE
WHERE SALARY > (SELECT AVG(SALARY) FROM EMPLOYEE)
AND DNO IN (SELECT DNO FROM EMPLOYEE
            WHERE ENAME LIKE '%M%');

-- 연습문제 15) 평균(AVG) 급여가(SALARY) 가장 적은(MIN) 업무를(JOB) 찾으세요.
--  출력은 담당업무(JOB), 평균(AVG)급여(SALARY) 출력하세요
--  설명) 담당 업무별(JOB) 평균(AVG) 급여를(SALARY) 찾아서 
--       그중에서 가장 평균 급여가 적은(MIN) 업무를 찾으면 됨
-- 1) 담당 업무별 평균 급여중 가장 작은 급여 조회
SELECT MIN(AVG(SALARY))
FROM EMPLOYEE
GROUP BY JOB; -- 1037.5

-- 2) 1037.5 와 평균 급여가 같은 사원의 담당업무별 평균급여를 조회
SELECT JOB, AVG(SALARY)
FROM EMPLOYEE
GROUP BY JOB
HAVING AVG(SALARY) = (SELECT MIN(AVG(SALARY))
                      FROM EMPLOYEE
                      GROUP BY JOB);

-- 연습문제 16) 전체 사원 중 ALLEN과 같은 직위(JOB)인 사원들의 
-- 직위(JOB), 사원번호(ENO), 사원명(ENAME), 급여(SALARY), 
-- 부서번호(DNO), 부서명(DNAME) 출력하는 SQL문을 작성하세요
-- 힌트) 조인 + 서브쿼리
-- 1) ALLEN 이 가지고 있는 직위 조회
SELECT JOB FROM EMPLOYEE
WHERE ENAME = 'ALLEN'; --SALESMAN

-- 2) SALESMAN 직위로 전체 사원 + 부서를 조인한 테이블을 조회
SELECT EMP.JOB, EMP.ENO, EMP.ENAME, EMP.SALARY, EMP.DNO, DEP.DNAME
FROM EMPLOYEE EMP
    ,DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO
AND JOB = (SELECT JOB FROM EMPLOYEE
           WHERE ENAME = 'ALLEN');

-- 연습문제 17) 10번 부서에 근무하는 사원 중 30번 부서에는 존재하지 않는 직책을 가진 사원들의
-- 사원번호(ENO), 사원명(ENAME), 직위(JOB), 부서번호(DNO), 부서명(DNAME), 
-- 부서위치를(LOC) 출력하세요
-- 힌트) 조인 + 서브쿼리
-- 1) 30번 부서에 존재하는 직위를 조회
SELECT JOB FROM EMPLOYEE
WHERE DNO = 30; -- SALESMAN, MANAGER, CLERK

-- 2) SALESMAN, MANAGER, CLERK 에 해당되지 않는 직위를 찾아서
-- 전체사원 + 부서를 조인한 테이블을 조회(단, 10번부서에 해당하는 사람만 추가로 조건을 걸기)
SELECT EMP.*, DEP.*
FROM EMPLOYEE EMP
    ,DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO
AND EMP.DNO = 10
AND EMP.JOB NOT IN (SELECT JOB FROM EMPLOYEE
                    WHERE DNO = 30);