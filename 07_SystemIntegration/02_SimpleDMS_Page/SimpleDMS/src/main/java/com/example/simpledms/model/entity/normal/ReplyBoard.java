package com.example.simpledms.model.entity.normal;

import com.example.simpledms.model.common.BaseTimeEntity;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

/**
 * packageName : com.example.simpledms.model.entity.normal
 * fileName : ReplyBoard
 * author : GGG
 * date : 2023-10-26
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-26         GGG          최초 생성
 */
@Entity
@Table(name="TB_REPLY_BOARD")
@SequenceGenerator(
        name = "SQ_REPLY_BOARD_GENERATOR"
        , sequenceName = "SQ_REPLY_BOARD"
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
// soft delete
@Where(clause = "DELETE_YN = 'N'")
@SQLDelete(sql = "UPDATE TB_REPLY_BOARD SET DELETE_YN = 'Y', DELETE_TIME=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE BID = ?")
public class ReplyBoard extends BaseTimeEntity {

//    속성
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE
                    , generator = "SQ_REPLY_BOARD_GENERATOR")
    private Integer bid; // 기본키, 시퀀스

    private String boardTitle;

    private String boardContent;

    private String boardWriter;

    private Integer viewCnt;

    private Integer boardGroup; // 트리구조 최상위 부모 노드( 부모가 있을 경우 : 부모번호, 없을 경우 : 자신의 게시판번호 )(정렬)

    private Integer boardParent; // 자신의 부모 노드 ( 부모가 있을 경우 : 부모번호, 없을 경우 : 0 ) : 핵심
}
