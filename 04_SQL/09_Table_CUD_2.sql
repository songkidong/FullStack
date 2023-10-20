-- 09_Table_CUD_2.sql
-- UPDATE(수정)
-- 대상 : DEPT_COPY 실습
-- 예제 1) 10번 부서의 이름 수정하기 : 'ACCOUNTING' -> 'PROGRAMMING'
-- 사용법) UPDATE 테이블명
--        SET
--           컬럼명 = 변경할 값
--        WHERE 컬럼명 = 값; (조건)
-- 전체 부서에 대해 수정하려면 WHERE 컬럼명 = 값; (조건)을 빼면 된다.
UPDATE DEPT_COPY
SET
    DNAME = 'PROGRAMMING'
WHERE DNO = 10;
SELECT * FROM DEPT_COPY; -- 결과 확인
-- 영구 반영 : 다른 사람이 변경된 데이터를 볼 수 있음
COMMIT;

-- 연습 1) 20번 부서 이름 수정하기 : 'HR' (인력팀)
UPDATE DEPT_COPY
SET
    DNAME = 'HR'
WHERE DNO = 20;
SELECT * FROM DEPT_COPY; -- 결과 확인
-- 영구 반영
COMMIT;

-- 연습(응용) 2) 컬럼 값을 여러개 수정하기
-- 10번 부서의 부서명을 'PROGRAMMING2', 부서위치를 'SEOUL'로 수정하세요
-- 힌트) SET 컬럼명 = 값, 컬럼명2= 값2 ...
UPDATE DEPT_COPY
SET
    DNAME = 'PROGRAMMING2'
    ,LOC = 'SEOUL'
WHERE DNO = 10;
SELECT * FROM DEPT_COPY; -- 결과 확인
-- 영구 반영
COMMIT;

-- 예제 4) 10번 부서의 지역명을 20번 부서의 지역명으로 수정하기
-- 힌트) 서브쿼리로 수정하기
-- 1) 20번 부서의 지역명 조회
SELECT LOC FROM DEPT_COPY
WHERE DNO = 20; -- DALLAS

-- 2) UPDATE
UPDATE DEPT_COPY
SET
    LOC = (SELECT LOC FROM DEPT_COPY
           WHERE DNO = 20)
WHERE DNO = 10;
SELECT * FROM DEPT_COPY; -- 결과 확인
-- 영구 반영
COMMIT;

-- 연습 3) 10번 부서의 부서명, 지역명을 30번 부서의 부서명, 지역명으로 변경하기
-- 힌트) 서브쿼리
-- 1) 30번 부서의 부서명, 지역명
SELECT DNAME FROM DEPT_COPY WHERE DNO = 30; -- SALES
SELECT LOC FROM DEPT_COPY WHERE DNO = 30; -- CHICAGO

-- 2) UPDATE 
UPDATE DEPT_COPY
SET
    DNAME = (SELECT DNAME FROM DEPT_COPY WHERE DNO = 30)
    ,LOC = (SELECT LOC FROM DEPT_COPY WHERE DNO = 30)
WHERE DNO = 10;
SELECT * FROM DEPT_COPY;

-- 다른 풀이 : 결과 같음
UPDATE DEPT_COPY
SET
    (DNAME, LOC) = (SELECT DNAME, LOC FROM DEPT_COPY WHERE DNO = 30)
WHERE DNO = 10;

-- DELETE : 삭제(D), 전체삭제, 부분삭제 모두 가능, 취소가능
-- VS TRUNCATE TABLE 테이블; (빠른 전체삭제, 최소불가)
-- 예제 6) 10번 부서를 삭제하세요
-- 사용법) DELETE (FROM) 테이블명
--        WHERE 컬럼명 = 값; (조건)
-- FROM 생략가능
DELETE FROM DEPT_COPY
WHERE DNO = 10;
-- 결과 확인
SELECT * FROM DEPT_COPY;
-- 영구 반영
COMMIT;

-- 연습 1) 영업부에(SALES) 에 근무하는 사원(DNO) 삭제하기
-- 힌트) 서브쿼리 사용해서 삭제
-- 1) 영업부에 해당하는 사원의 부서번호를 찾고
SELECT DNO FROM DEPT_COPY
WHERE DNAME = 'SALES'; -- 30
-- 2) 그 부서번호를 가진 사원을 삭제
DELETE FROM DEPT_COPY
WHERE DNO = (SELECT DNO FROM DEPT_COPY
            WHERE DNAME = 'SALES');
-- 결과 확인
SELECT * FROM DEPT_COPY;
-- 취소
ROLLBACK;
-- 영구 반영
COMMIT;

-- 기타 명령어
-- 테이블 설계구조 보기 : DESC 테이블명
DESC DEPT_COPY;