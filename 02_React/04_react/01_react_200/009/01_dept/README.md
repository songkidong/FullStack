# 리액트 기본 폴더 구조
- assets     : 이미지 , css , 등
- components : 공통 컴포넌트 들 관리(Header.js, Footer.js 등) 
- pages      : 일반 페이지 컴포넌트 들 (Dept.js, Emp.js 등)
- services   : axios 공통 함수들 정의 또는 다른 공통 js 함수들 
- utils      : 통신 라이브러리 관련 파일(http-common.js 등)

# 메뉴 라이브러리 설치(오픈소스, MIT 라이센스)
npm i react-router-dom

# 백엔드 통신 라이브러리 설치(오픈소스, MIT 라이센스)
npm i axios

# 부트스트랩 css cdn : public/index.html 에 추가 (타이틀 밑)
# 부트스트랩 js cdn : public/index.html 에 추가 (바디 안 제일 밑)

# (참고) 라이센스
# MIT 라이센스 : 무료 사용 -> 수정 -> 상용 판매 가능
# (주의) GNU라이센스 : 무료 사용 -> 수정 -> 상용 가능(소스공개)