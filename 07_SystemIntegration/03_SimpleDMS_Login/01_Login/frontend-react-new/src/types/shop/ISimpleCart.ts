// ISimpleCart.ts : 인터페이스
// 상품(SimpleProduct) + 장바구니(SimpleCart) : 조인 타입
export default interface ISimpleCart {
    scno?: any | null,   // 장바구니번호
    spno: number,        // 상품번호
    codeId: number,
    title: string,
    imgPath: string,
    unitPrice: number,
    cartCount: number,   // 장바구니 상품개수
}