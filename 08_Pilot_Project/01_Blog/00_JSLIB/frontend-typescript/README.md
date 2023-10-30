# 메뉴 라이브러리 
npm i react-router-dom

# 0) jquery
npm i --save-dev @types/jquery
npm i @types/jqueryui

# 0) bootstrap
npm install --save @types/bootstrap

# 1) countup lib : 숫자 올라가기 외부 lib
# 공홈 : https://github.com/bfintal/Counter-Up
#    (cdn(링크), npm(설치))
# waypoints 필수 설치 필요

# 2) typed.js : 화면에 타자처럼 타이핑 애니메이션 효과를 주는 lib
# => npm 설치 (cdn 있음)
# 공홈 : https://mattboldt.github.io/typed.js/
npm install typed.js
# 2-1) typed.js import 방법 (MIT 라이선스)
import Typed from "typed.js";

# 3) wowjs : GNU GPL 라이선스 v3(제약: 소스 공개 필요)
# 공홈 : https://wowjs.uk/
# 유사라이브러리 : AOS lib (MIT 라이선스)
npm i wowjs
# 3-1) wowjs import 방법
import { WOW } from "wowjs";
# 3-2) animate.css import : App.tsx
# // todo: animate css import (wow 사용시 import 필요)
import "wowjs/css/libs/animate.css";

# 4) 라이트박스 lib : SimpleLightbox 설치
# (cdn, npm(설치))
# 공홈 : https://simplelightbox.com/
npm install simplelightbox
# 4-1) import SimpleLightbox from "simplelightbox" 설치 : initMain.js
import SimpleLightbox from "simplelightbox";
# 4-2) // todo: simplelightbox css import : App.tsx
import "simplelightbox/dist/simple-lightbox.css";

# 5) owl-carousel lib
# 회전목마 : 여러개의 사진이 자동으로 돌아가게 하는 lib
# 유사 lib : swiper
# (cdn(index.html 링크), npm(설치))
# 공홈 : https://owlcarousel2.github.io/OwlCarousel2/
# 5-1) index.html : css link
# <link href="/lib/owlcarousel/assets/owl.carousel.css" rel="stylesheet" />
# 5-2) index.html : js link (body)
# <script src="/lib/owlcarousel/owl.carousel.min.js"></script>
# 5-3) type 설치
npm i @types/owl.carousel

# 6) isotope 설치 : (공홈 : https://isotope.metafizzy.co/ )
# 이미지들의 정렬을 해주는 lib
# (참고) npm install isotope-layout --save
# npm i @types/isotope-layout
# (참고) npm i imagesloaded
# npm i @types/imagesloaded
# cdn 설치 : index.html js 링크 걸기
# <!-- 5) isotope : https://isotope.metafizzy.co/ -->
# =<script src="/lib/isotope/isotope.pkgd.min.js"></script>
# <!-- isotope 이미지 겹침 문제로 사용 -->
# <script src="https://unpkg.com/imagesloaded@5/imagesloaded.pkgd.js"></script>



# 공통) 외부 lib 타입 없을때 대처하는 방법
# 1) tsconfig.json 파일 - compilerOptions 속성에 아래 추가 : 프로젝트시작위치/types - 이 위치에 타입을 인식하게 하는 경로 설정
"typeRoots": ["./types", "./node_modules/@types"], // 보통 types 폴더를 만들어 타입 정의
# 2) types/외부라이브러리명/index.d.ts 파일 생성 후 아래 추가
declare module '외부라이브러리명';