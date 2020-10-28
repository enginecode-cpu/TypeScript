/**
 * 매개변수 기본값 지정하기
 * 
 * 선택적 매개변수는 항상 그 값이 undefined로 고정된다.
 * 
 * default 매개변수
 * 함수 호출 시 인수를 전달하지 않더라도 
 * 매개변수에 기본값을 설정할 수 있다.
 * 
 * (매개변수: 타입 = 매개변수 기본값)
 */

type Ps = { name: string, age: number }

const makePerson = (name: string, age: number = 5): Ps => {
    const person = { name: name, age: age }
    return person
}
console.log(makePerson('신짱구'))
console.log(makePerson('신형만', 35))

/**
 * 객체 생성 시 값 부분을 생략할 수 있는 타입스크립트 구문
 * 
 * const makePerson = (name: string, age: number = 5): Ps => {name, age}
 * 
 * 컴파일러가 객체로 해석하게 하려면 객체를 소괄호로 감싸주어야한다.
 * 
 * const makePerson = (name: string, age: number = 5): Ps => ({name, age})
 */

type Ps2 = { name: string, age: number }

const makePerson2 = (name: string, age: number = 5): Ps2 => ({name, age})
console.log(makePerson2('신짱구'))
console.log(makePerson2('신형만', 35))

/**
 * 매개변수에 비구조화 할당문
 * 
 * 함수의 매개변수도 변수의 일종이므로 다음과 같이
 * 비구조 할당문을 적용할 수 있다.
 */

const printPerson = ({name, age}: Ps2): void => {
    console.log(`name: ${name}, age: ${age}`)
}
printPerson({name: '김철수', age: 5})