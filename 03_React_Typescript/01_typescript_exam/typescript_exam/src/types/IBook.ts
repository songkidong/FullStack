// IBook.ts : 책방객체명
export default interface IBook {
    id?: number,
    title: string,
    publisher: string,
    author: string,
    stock: number
}