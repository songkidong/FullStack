function showDetail() {
    // 1) style.display = "block" (나타남), #desc 태그(div) 나타남
    document.querySelector("#desc").style.display = "block";
    // 2) #open 버튼 사라짐
    document.querySelector("#open").style.display = "none";
}

function hideDetail() {
    // 1) style.display = "none" (사라짐), #desc 태그(div) 사라짐
    document.querySelector("#desc").style.display = "none";
    // 2) #open 버튼 나타남
    document.querySelector("#open").style.display = "block";
}