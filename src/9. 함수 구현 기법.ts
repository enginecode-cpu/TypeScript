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