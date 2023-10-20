// 선택 함수
let cover = document.querySelector("#cover");
// 마우스가 위로 올라가면 함수
cover.addEventListener("mouseover", function(){
    cover.src = "./img/boy.jpg";
})
// 마우스가 나가면 함수
cover.addEventListener("mouseout", function(){
    cover.src = "./img/girl.jpg";
})