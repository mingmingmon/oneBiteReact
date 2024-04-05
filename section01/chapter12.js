// 1. 함수 표현식
// -> 함수 선언식으로 함수를 만들지 않고 값으로서 만드는 것을 말함
// -> 익명 함수
// 호이스팅이 지원 안 됨.
function funcA() { 
    console.log("funcA");
    //return 1;
}

let varA = funcA; // funcA()가 아님
// console.log(varA());
// console.log(funcA);
// console.log(funcA.toString());

// 선언 식이 아님.
let varB = function funcB() {
    console.log("funcB");
}
// 익명함수
let varC = function () {
    console.log("funcB");
}

// 2. 화살표 함수
let varD = () => {
    return 1;
};

let varE = () => 1;

let varF = (value) => {
    return value + 1;
}

console.log(varF())