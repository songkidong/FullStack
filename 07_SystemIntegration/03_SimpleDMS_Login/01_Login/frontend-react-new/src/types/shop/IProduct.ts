// IProduct.ts : 인터페이스
export default interface IProduct {
    // 테이블 보기 TB_PRODUCT
    pno?: any | null,     // 기본키
    kindCode: number,     // 상품종류코드
    pname: string,        // 상품명
    image: string,        // 이미지 경로
    unitPrice: number,    // 단가
    statusCode: number,   // 상품상태코드(20001(신상), 20002(이월상품), 20003(전시품))
    useYn: string         // 사용여부
}