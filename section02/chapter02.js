//단락 평가 == short cut
function returnFalse() {
    console.log("False 함수");
    return undefined;
    return false;
}

function returnTrue() {
    console.log("True 함수");
    return 10;
    return true;
}

console.log(returnFalse() && returnTrue());
console.log(returnFalse() || returnTrue());
console.log(returnTrue() || returnFalse());
console.log(returnTrue() && returnFalse());

// 단락 평가 활용 사례

function printName(person) {
    console.log(person && person.name);

    // 또는
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName();
printName({name: "이정환"});


