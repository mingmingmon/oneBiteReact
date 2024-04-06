// 스코프
// -> 전역(전체 영역) 스코프 / 지역 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서 접근 가능
// -> 함수를 함수 안에 선언하면 지역 스코프이고 if 또는 반복문 안에 선언하면 전역 스코프

let a = 1; // 전역 스코프

function funcA(){
    let b = 2;
    console.log(a);

    // 함수 안에서 함수를 선언하면 지역 함수로 처리
    function funcB() {}
}

funcA();

//console.log(b);

if (true) {
    let c = 1;

    // if 안에서 함수를 선언하면 전역 함수로 처리
    function funcB() {}
}

//console.log(c);

for (let i = 0; i < 10; i++) {
    let d = 1;

      // for 안에서 함수를 선언하면 전역 함수로 처리
      function funcB() {}
}

//console.log(d);

funcB();