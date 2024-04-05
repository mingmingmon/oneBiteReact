// 함수 선언

function greeting () {
    console.log("어서와~");
}

function getArea (width, height) {
    function another() { //중첩함수
        console.log("another");
    }
    another();
    let area = width * height;
    return area;
}

let area1 = getArea(10, 20);

// 호이스팅 -> 끌어올리다. 함수 선언문을 호출문 아래에 둬도 실행가능
