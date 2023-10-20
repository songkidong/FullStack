package com.example.mybatisexam.service.exam01;

import com.example.mybatisexam.dao.EmpDao;
import com.example.mybatisexam.model.common.PageReq;
import com.example.mybatisexam.model.common.PageRes;
import com.example.mybatisexam.model.vo.Emp;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.mybatisexam.service.exam01
 * fileName : EmpService
 * author : GGG
 * date : 2023-10-12
 * description : 회원 서비스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-12         GGG          최초 생성
 */
@Slf4j
@Service
public class EmpService {

    @Autowired
    EmpDao empDao; // db crud 함수들이 있는 클래스

    /** ename like 검색 */
    public PageRes<Emp> findByEnameContaining(
            String ename,
            PageReq pageReq
    ) {
//      TODO: 전체 조회(like 됨)
        List<Emp> list = empDao.findByEnameContaining(ename, pageReq);

//      TODO: 페이징 처리 로직
//        1) 총 테이블 개수 :
        long totalCount = empDao.countByEname(ename);
//      TODO: 생성자 페이지 결과 객체(PageRes)
        PageRes pageRes = new PageRes<>(
                list,               // 검색 결과(부서) 배열
                pageReq.getPage(),  // 현재 페이지 번호
                totalCount,         // 총 테이블 건수
                pageReq.getSize()   // 1페이지당 개수
        );
        return pageRes;
    }

    /** 상세조회 */
    public Optional<Emp> findById(int eno) {
//        db 상세조회 호출
        Optional<Emp> optionalEmp = empDao.findById(eno);

        return optionalEmp;
    }

    /** 저장함수 */
    public int save(Emp emp) {
        int queryResult = -1; // 저장된 건수를 위한 변수

        try {
//          TODO: 기본키(eno) 없으면 insert
            if(emp.getEno() == null) {
                queryResult = empDao.insert(emp);
            } else {
//          TODO: 기본키(eno) 있으면 update
                queryResult = empDao.update(emp);
            }
        } catch (Exception e) {
            log.debug(e.getMessage());
        }
        return queryResult;
    }

    /** 삭제함수 */
    public boolean removeById(int eno) {
        try {
            if (empDao.existById(eno) > 0) {
                empDao.deleteById(eno);
                return true;
            }
        } catch (Exception e) {
            log.debug(e.getMessage());
        }
        return false;
    }

    /** TODO: dynamic sql 조회 */
    public PageRes<Emp> findByDynamicContaining(
            String ename,
            String job,
            Integer manager,
            PageReq pageReq
    ) {
        //      TODO: dynamic 조회(like 됨)
        List<Emp> list = empDao.findByDynamicContaining(ename, job, manager, pageReq);

//      TODO: 페이징 처리 로직
//        1) 총 테이블 개수 :
        long totalCount = empDao.countByDynamic(ename, job, manager);
//      TODO: 생성자 페이지 결과 객체(PageRes) => jsp 로 페이징 정보를 주기위해 코딩함
        PageRes pageRes = new PageRes<>(
                list,               // 검색 결과(부서) 배열
                pageReq.getPage(),  // 현재 페이지 번호
                totalCount,         // 총 테이블 건수
                pageReq.getSize()   // 1페이지당 개수
        );
        return pageRes;
    }
}
