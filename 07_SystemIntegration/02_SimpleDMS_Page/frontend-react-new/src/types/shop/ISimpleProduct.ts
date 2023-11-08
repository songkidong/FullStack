// ISimpleProduct.ts : 인터페이스
export default interface ISimpleProduct {
    spno?: any | null,  // 기본키
    codeId: number,     // 상품종류코드
    title: string,      // 상품명
    imgPath: string,    // 이미지 경로
    unitPrice: number,  // 단가
    useYn: string       // 사용여부
}