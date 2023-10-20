// http-common.js
// 벡엔드 기본 url 주소 설정(axios 사용)
// 가짜벡엔드(json-server) : http://localhost:8000
// 자원(resource) url : /dept
// 사용예) http://localhost:8000/dept
// 이 파일에서는 기본주소만 설정하고 : http://localhost:8000
// 다른 파일에서 추가 url 설정 : /dept

// 1) 통신 라이브러리 추가 : import
import axios from "axios";

// 2) 기본 주소 설정 : 가짜 백엔드(http://localhost:8000)
export default axios.create({
  baseURL: "http://localhost:8000", // 기본 주소
  headers: {
    "Content-Type": "application/json", // 통신에 사용할 문서종류(json)
  },
});
