// 옵셔널 널리쉬(optional nullsh)
// 1) 용도 : 객체나 함수에 대해 접근할 때 사용
// why? 자바스크립트 / 자바 언어의 문제점
// 소스에서 값이 null이 나오면 프로그램이 비정상 종료가 됨
// => 서비스가 갑자기 다운(예 : 카카오톡이 서비스 다운)
// 코딩 : null 에러를 회피해서 코딩을 전통적으로 했음
// 아래 예)
let num = null;
// 미리 변수의 값에 null이 있는지 체크했음
if(num == null) {
    console.log("이 기능은 실행하지 않습니다.");
}

// 개선된 예제 : 옵셔널 널리쉬 사용
// user 가 null 이면 강제로 undefined 값으로 변경함
// 사용법 : 변수명?.속성명
let user = null; // 객체, address 속성이 있는지 없는지 체크
// 객체의 속성 호출 : user.address => user = null;
//                  null.address (에러 : 서비스다운)
console.log(`user 는 ${user?.address}`);

// github 등 다른 디스크 등 모두 고장으로 인해 삭제될 수 있음
// 백업본을 항상 간직한다.