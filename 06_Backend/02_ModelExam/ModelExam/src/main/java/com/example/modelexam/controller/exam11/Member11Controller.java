package com.example.modelexam.controller.exam11;

import com.example.modelexam.model.Member;
import com.example.modelexam.service.exam11.Member11Service;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.modelexam.controller.exam11
 * fileName : Member11Controller
 * author : GGG
 * date : 2023-10-12
 * description : @RestController + react 연동(vue 등)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-12         GGG          최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/exam11")
public class Member11Controller {
    //  TODO: 객체 가져오기
    @Autowired
    Member11Service memberService;

    /**
     * 전체 조회 함수
     */
    @GetMapping("/member")
    public ResponseEntity<Object> getMemberAll() {
        try {
            List<Member> list = memberService.findAll();
            if (list.isEmpty() == false) {
//              TODO: 조회 성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//              TODO: 데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            log.debug(e.getMessage());
//          TODO: INTERNAL_SERVER_ERROR(500)
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 상세 조회(1건 조회)
     */
    @GetMapping("/member/{eno}")
    public ResponseEntity<Object> getMemberId(@PathVariable long eno) {
        try {
            Optional<Member> optionalMember = memberService.findById(eno);
            if(optionalMember.isEmpty() == false) {
//              TODO: 조회 성공
                return new ResponseEntity<>(optionalMember.get(), HttpStatus.OK);
            } else {
//              TODO: 데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            log.debug(e.getMessage());
//          TODO: INTERNAL_SERVER_ERROR(500)
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 저장 함수
     */
    @PostMapping("/member")
    public ResponseEntity<Object> createMember(
            @RequestBody Member member
    ) {
        try {
            List<Member> list = memberService.save(member);
            return new ResponseEntity<>(list, HttpStatus.CREATED);
        } catch (Exception e) {
            log.debug(e.getMessage());
//          TODO: INTERNAL_SERVER_ERROR(500) : SQL 구문 에러 등
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 수정 함수
     */
    @PutMapping("/member/edit/{eno}")
    public ResponseEntity<Object> updateMember(
            @PathVariable int eno,
            @RequestBody Member member
    ) {
        try {
            List<Member> list = memberService.save(member);
            return new ResponseEntity<>(list, HttpStatus.CREATED);
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 삭제 함수
     */
    @DeleteMapping("/member/delete/{eno}")
    public ResponseEntity<Object> deleteMember(
            @PathVariable int eno
    ){
        try {
            boolean bSuccess = memberService.removeById(eno);
            if (bSuccess == true) {
//              TODO: 삭제 성공 : OK(200)
                return new ResponseEntity<>(HttpStatus.OK);
            } else {
//              TODO: 삭제 할 데이터 없음 : NO_CONTENT(203)
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            log.debug(e.getMessage());
//          TODO: INTERNAL_SERVER_ERROR(500)
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
