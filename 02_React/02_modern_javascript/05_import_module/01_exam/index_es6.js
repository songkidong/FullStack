// 01_eaxm/index_es6.js
// TODO: num이 3의 배수인지 판단해서 가져온 변수를 이용해서 출력
// 입력 : x
// 출력 : 3의 배수입니다
// TODO: import 하세요
import {three, notThree} from"../01_exam/var_es6.js";
// 초기값
let num = 3;

// TODO: num이 3의 배수인지 판단해서 가져온 변수를 이용해서 출력
if(num % 3 == 0) {
    console.log(three);
} else {
    console.log(notThree);
}
