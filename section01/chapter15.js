// 1. 객체 생성
let obj1 = new Object() // 객체 생성자
let obj2 = {} // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성) (key : value)
// key값은 숫자와 문자열만, key는 큰 따옴표 안 해줘도 되긴 하는데 띄어쓰기 있는 경우는 해야함
let person = {
    name : "전민주",
    age : 23,
    hobby : "오버워치",
    job : "학생",
    extra : {},
    10 : 20,
    "like cat" : true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법) 존재하지 않는 프로퍼티에 접근하면 undefined
let name = person.name;
let age = person["age"] // 프로퍼티의 키를 큰 따옴표로 작성. 안 하면 변수로 인식해서 오류

let property = "hobby";
let hobby = person[property];

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "student";
person["favoriteFood"] = "치킨";


// 3.3 프로퍼티 수정하는 방법
person.job = "student";
person["favoriteFood"] = "피자";

// 3.4 프로퍼티 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티의 존재 유무 확인하는 방법 (in 연산자) -> boolean 값 반환
let result1 = "name" in person;


