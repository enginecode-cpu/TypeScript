/**
 * 인터페이스 선언문
 * 타입스크립트는 객체의 타입을 정의할 수 있게 하는
 * interface라는 키워드를 제공한다.
 * 중괄호({})로 속성과 속성의 타입 주석을 나열하는 형태이다.
 * 
 * interface 인터페이스 이름 {
 *  속성 이름[?]: 속성 타입[,...]
 * }
 */

interface Student {
    name: string
    age: number
}

let student1: Student = {
    name: '신짱구',
    age: 5
};

let student2: Student = {
    name: '김철수',
    age: 5
};

/**
 * 선택 속성 구문
 * interface를 설계할 때 어떤 속성은 반드시 있어야하고
 * 어떤 속성은 있어도 되고 없어도 된다.
 * 이럴 때, 속성 뒤에 물음표(?) 기호를 붙여서 interface를 정의한다.
 */

interface Family {
    name: string
    age: number
    ect?: boolean
}

let family1: Family = {
    name: '신형만',
    age: 35,
}
let family2: Family = {
    name: '봉미선',
    age: 29,
    ect: true
}

/**
 * 익명 인터페이스
 * interface 키워드를 사용하지 않고 이름 없는 interface를 만드는 것이 가능하다
 */

let robot: {
    name: string
    age: number
    ect?: boolean
} = { name: '로봇 신형만', age: 35 };

/**
 * 익명 인터페이스는 함수를 구현할 때 많이 사용된다.
 */

function printMe(me: {name: string, age: number }) {
    console.log(`${me.name} ${me.age}`);
}
printMe(robot);