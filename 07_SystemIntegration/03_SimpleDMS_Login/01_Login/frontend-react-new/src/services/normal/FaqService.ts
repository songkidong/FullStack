// FaqService.ts : axios 공통 CRUD 함수
import IFaq from "../../types/normal/IFaq";
import http from "../../utils/http-common";


// 전체 조회 + like 검색(paging 기능 : page(현재페이지), size(1페이지당개수))
const getAll = (title:string, page:number, size:number) => {
    return http.get<Array<IFaq>>(`/normal/faq?title=${title}&page=${page}&size=${size}`);
  };
  
  // 상세 조회
  const get = (dno:any) => {
    return http.get<IFaq>(`/normal/faq/${dno}`);
  };
  
  // 저장함수
  const create = (data:IFaq) => {
    return http.post<IFaq>("/normal/faq", data);
  };
  // 수정함수
  const update = (dno:any, data:IFaq) => {
    return http.put<any>(`/normal/faq/${dno}`, data);
  };
  // 삭제함수
  const remove = (dno:any) => {
    return http.delete<any>(`/normal/faq/deletion/${dno}`);
  };
  
  const FaqService = {
    getAll,
    get,
    create,
    update,
    remove,
  };
  
  export default FaqService;
  