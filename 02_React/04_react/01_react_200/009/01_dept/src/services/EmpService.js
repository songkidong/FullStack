// EmpService.js : axios 공통 함수가 정의된 파일
// axios 기본 주소 정의 파일 import : http-common.js(확장자 생략가능)
import http from "../utils/http-common";

// TODO: 공통 모든 데이터 조회 함수 : /customer
// nfn
const getAll = () => {
  return http.get("/customer");
};

// TODO: 검색어 조회 함수 : /customer?cname=검색어
// 인터넷 주소 : http//url:포트번호/추가url?변수명=값
// 웹브라우저 주소창에서 다른 페이지 이동시 변수에 값을 저장해서 전달할 수 있음
// 예) 1번페이지 : /customer        2번페이지 : /customer-detail?변수=값
// nfn
const findByCname = (cname) => {
  return http.get(`/customer?cname=${cname}`);
};

// 저장 요청 함수(대상 : 화면에 입력된 객체)
// TODO: 저장요청 : axios.post("url", 객체) 함수 사용
const create = (data) => {
  return http.post("/customer", data);
};

// TODO: 상세조회(1건) : axios.get(url/사원번호(id)) 함수 사용
const get = (id) => {
  return http.get(`/customer/${id}`);
};

// TODO: 수정요청함수 : axios.put(`/customer/${id}`, 수정될객체)
const update = (id, data) => {
  return http.put(`/customer/${id}`, data);
};

// TODO: 삭제요청함수(1건) : axios.delete(`/customer/${id}`);
const remove = (id) => {
  return http.delete(`/customer/${id}`);
};

const EmpService = {
  getAll, // 모든데이터 조회
  findByCname, // 검색어 조회
  create, // 저장 요청
  get, // 상세조회
  update, // 수정요청
  remove, // 삭제요청
};
export default EmpService; // 함수 내보내기
