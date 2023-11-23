// IThreadBoard.ts : 타입 인터페이스
export default interface IThreadBoard {                     
    tid?: any | null,
    subject: string,      // 제목
    mainText: string,     // 본문
    writer: string,
    views: number,        // 조회수
    tgroup: any | null,   // 그룹번호
    tparent: any | null   // 부모속성
}