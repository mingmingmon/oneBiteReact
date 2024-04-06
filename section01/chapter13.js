// 1. 콜백 함수
function main(value) {
    console.log(value);
    value();
}

main(() => {
//    console.log("i am sub");
});

// 2. 콜백함수의 활용
function repeat(count) {
    for (let i = 1; i <= count; i++) {
        console.log(i);
    }
}

function repeatDouble(count) {
    for (let i = 1; i <= count; i++) {
        console.log(i * 2);
    }
}

repeat(5);
repeatDouble(5);

function repeatCallback(count, callback) {
    for (let i = 1; i <= count; i++) {
        callback(i);
    }
}

repeatCallback(5, function(i) {
    console.log(i);
})

repeatCallback(5, (i) => {
    console.log(i * 2);
})

repeatCallback(5, function(i) {
    console.log(i * 3);
})