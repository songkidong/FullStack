// IWebtoon.ts : 웹툰객체명
export default interface IWebtoon {
  id?: number;
  name: string;
  link: string;
  img: string;
  isUpdate: boolean;
}
