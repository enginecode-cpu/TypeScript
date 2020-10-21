/**
 * 클래스 선언문
 * class 클래스 이름 {
 *      [private | protect | public] 속성 이름[?]: 속성 타입[...]
 * }
 */

class Person {
    name: string
    age?: number
}

let hyungman: Person = new Person();
hyungman.name = '형만';
hyungman.age = 35;
console.log(hyungman);

/**
 * 접근 제한자
 * 클래스의 속성은 public, private, protect와 같은 접근 제한자를
 * 이름 앞에 붙일 수 있다.
 */

/**
 * 생성자
 * constructor를 생성자라고 한다.
 */
class Person2 {
    constructor(public name: string, public age?: number) {}
}
let hyungman2: Person2 = new Person2('신형만', 35);
console.log(hyungman2);

/**
 * 위의 코드는 다음과 같다
 * class Person2 {
 *      name: string
 *      age: number
 *      constructor(name: string, age?: number) {
 *          this.name = name;
 *          this.age = age;
 *      }
 * }
 */

/**
 * 인터페이스 구현
 * 클래스가 인터페이스를 구현할 때는 implements 키워드를 사용한다
 * 
 * class 클래스 이름 implements 인터페이스 이름 {
 *     ...
 * }
 * 
 * 클래스 몸통에는 반드시 인터페이스가 정의하고 있는 속성을 
 * 멤버 속성으로 포함해야한다.
 */

interface IPerson3 {
    name: string
    age?: number
}

class Person3 implements IPerson3 {
    name: string
    age: number
}

/**
 * 다음과 같이 해도 된다.
 */
interface IPerson4 {
    name: string
    age?: number
}

class Person4 implements IPerson4 {
    constructor(public name: string, public age: number) {}
}

let jjang_gu: Person4 = new Person4('신짱구', 5);
console.log(jjang_gu);