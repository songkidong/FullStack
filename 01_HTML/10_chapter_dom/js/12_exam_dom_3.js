// 합계 : 국어(kor) + 영어(eng) + 수학(math) = sumVal
// 평균 : sumVal / 3 = avgVal
function sum_avg(kor, eng, math) {
    let sumVal = kor + eng + math; //합계 (80 + 90 + 100)
    let avgVal = sumVal / 3; // 평균

    // id = "kor" 위치에 국어(kor) 출력
    document.querySelector("#kor").innerHTML = kor; //국어 점수
    document.querySelector("#eng").innerHTML = eng; // 영어 점수
    document.querySelector("#math").innerHTML = math; // 수학 점수
    document.querySelector("#sum").innerHTML = sumVal; // 합계
    document.querySelector("#avg").innerHTML = avgVal; // 평균
}