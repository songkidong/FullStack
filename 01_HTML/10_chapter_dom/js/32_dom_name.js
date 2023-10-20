// 성 + 이름 출력하기
// 선택함수 : 성 input
let familyText = document.querySelector("#familyText"); // input 태그

// 선택함수 : 이름 input
let firstText = document.querySelector("#firstText"); // input 태그

// 성 + 이름 출력할 위치 선택
let fullName = document.querySelector("#fullName"); // input 태그

// 이벤트 : 키보드 키입력 : keyup
familyText.addEventListener("keyup", function(){
    // 성이 입력되면 fullName 출력하기
    // familyText.value(성 입력값) + firstText.value(이름 입력값)
    fullName.innerHTML = familyText.value + firstText.value;
})

firstText.addEventListener("keyup", function(){
    // 이름이 입력되면 fullName 출력하기
    // familyText.value(성 입력값) + firstText.value(이름 입력값)
    fullName.innerHTML = familyText.value + firstText.value;
})