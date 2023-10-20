// 새로운 창(새로운 탭) 열기/닫기
function openWin() {
    let opt = "width = 400, height = 350"; // 새로운 창 크기
    myWin = window.open("notice.html", "doit", opt);
}
function closeWin() {
    mywin.close(); // 새로운 창 띄우고 리턴된 변수를 사용
}