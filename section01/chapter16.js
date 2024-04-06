// 1. 상수 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

animal = {a : 1}; //불가 -> 포인터 바꾸기

// 얘네는 내용이 바뀌는 것것
animal.age = 2; //가능
animal.name = "까망이" //가능
delete animal.color; //가능

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
const person = {
    name: "전민주",
    sayHi1: function () {
        console.log("안녕!");
    },
    sayHi2: () => {
        console.log("안녕!");
    },
    // 메서드 선언
    sayHi3() {
        console.log("안녕~");
    },
};

person.sayHi3();
sayHi3(); // 이건 안 됨.

person["sayHi1"](); // 소괄호 붙여햐 실행 된단다.~ []는 키값을 부른거다.