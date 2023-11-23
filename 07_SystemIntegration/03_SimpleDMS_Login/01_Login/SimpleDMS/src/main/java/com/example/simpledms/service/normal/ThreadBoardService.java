package com.example.simpledms.service.normal;

import com.example.simpledms.model.dto.normal.ReplyBoardDto;
import com.example.simpledms.model.dto.normal.ThreadBoardDto;
import com.example.simpledms.model.entity.normal.ReplyBoard;
import com.example.simpledms.model.entity.normal.ThreadBoard;
import com.example.simpledms.repository.normal.ThreadBoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * packageName : com.example.simpledms.service.normal
 * fileName : ThreadBoardService
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
@Service
public class ThreadBoardService {

    @Autowired
    ThreadBoardRepository threadBoardRepository;

    //    계층형 쿼리 조회(dto) : like 검색
    public Page<ThreadBoardDto> selectByConnectByPage(String subject, Pageable pageable) {

        Page<ThreadBoardDto> page
                = threadBoardRepository.selectByConnectByPage(subject,pageable);

        return page;
    }

    //    답변 글 저장
    public ThreadBoard save(ThreadBoard threadBoard) {
        ThreadBoard threadBoard2 = threadBoardRepository.save(threadBoard);

        return threadBoard2;
    }

    //    게시물 저장
    public int saveBoard(ThreadBoard threadBoard) {
        int insertCount
                = threadBoardRepository.insertByBoard(threadBoard);

        return insertCount;
    }
}
