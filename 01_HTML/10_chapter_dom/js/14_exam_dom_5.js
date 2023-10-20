// 문제 풀이
// 1) 입력 받기 : "y"
let char = prompt("글자");
if(char === "y") {
    document.querySelector("#app").innerHTML = "<button>글쓰기</button>";
} else {
    document.querySelector("#app").innerHTML = "<button>글수정</button>";
}