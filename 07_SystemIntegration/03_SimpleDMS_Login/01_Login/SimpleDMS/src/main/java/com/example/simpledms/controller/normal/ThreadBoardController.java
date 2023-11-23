package com.example.simpledms.controller.normal;

import com.example.simpledms.model.dto.normal.ReplyBoardDto;
import com.example.simpledms.model.dto.normal.ThreadBoardDto;
import com.example.simpledms.model.entity.normal.ReplyBoard;
import com.example.simpledms.model.entity.normal.ThreadBoard;
import com.example.simpledms.service.normal.ThreadBoardService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * packageName : com.example.simpledms.controller.normal
 * fileName : ThreadBoardController
 * author : GGG
 * date : 2023-10-27
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-27         GGG          최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/api/normal")
public class ThreadBoardController {

    @Autowired
    ThreadBoardService threadBoardService;

    //    전체 조회(계층형, dto) : like 검색
    @GetMapping("/thread-board")
    public ResponseEntity<Object> selectByConnectByPage(
            @RequestParam(defaultValue = "") String subject,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ){
        try {
            Pageable pageable = PageRequest.of(page, size);

            Page<ThreadBoardDto> threadBoardDtoPage
                    = threadBoardService
                    .selectByConnectByPage(subject, pageable);

            Map<String , Object> response = new HashMap<>();
            response.put("threadBoard", threadBoardDtoPage.getContent()); // 배열
            response.put("currentPage", threadBoardDtoPage.getNumber()); // 현재페이지번호
            response.put("totalItems", threadBoardDtoPage.getTotalElements()); // 총건수(개수)
            response.put("totalPages", threadBoardDtoPage.getTotalPages()); // 총페이지수

            if (threadBoardDtoPage.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    답변글 저장
    @PostMapping("/thread")
    public ResponseEntity<Object> create(@RequestBody ThreadBoard threadBoard) {

        try {
            ThreadBoard threadBoard2 = threadBoardService.save(threadBoard); // db 저장

            return new ResponseEntity<>(threadBoard2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    게시물 저장
    @PostMapping("/thread-board")
    public ResponseEntity<Object> createBoard(@RequestBody ThreadBoard threadBoard) {

        try {
            int insertCount = threadBoardService.saveBoard(threadBoard); // db 저장

            return new ResponseEntity<>(insertCount, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
