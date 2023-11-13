// IReplyBoard.ts : 인터페이스 타입
export default interface IReplyBoard {                  
    bid?: any | null,
    boardTitle: string,
    boardContent: string,
    boardWriter: string,
    viewCnt: number,
    boardGroup: any|null,
    boardParent: any|null
}