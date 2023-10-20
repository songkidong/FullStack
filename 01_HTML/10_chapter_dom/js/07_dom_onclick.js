// 예제) 3가지 글자 링크를 클릭하면 그 색깔로 배경색을 바꾸기
// 클릭 이벤트 함수
// 함수 사용 : changeBg('green')
function changeBg(color) {
    // id = result 위치에 배경색을 바꿈
    let result = document.querySelector("#result");
    // 배경색 바꾸기
    result.style.backgroundColor = color; // color = 'green'
}