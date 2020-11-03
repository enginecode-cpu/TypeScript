/**
 * 콜백 함수
 *
 * 함수 표현식을 매개 변수로 받을 수 있다
 * 매개 변수 형태로 동작하는 함수를 콜백 함수라고 한다.
 */

const gx = (callback: () => void): void => callback()

const init = (callback: () => void): void => {
  console.log("default initialization finished")
  callback()
  console.log("all initialization finished")
}

init(() => console.log("custom initialization finished"))


/**
 * 중첨 함수
 * 함수 안에 또 다른 함수를 사용할 수 있다
 */

const calc = (value: number, callback: (x: number) => void): void => {
  const add = (a: number, b: number) => a + b
  function mul(a: number, b: number) {
    return a * b
  }

  const res = mul(add(1, 2), value)
  callback(res)
}
calc(30, (res: number) => console.log(`result: ${res}`))


/**
 * 고차 함수와 클로저, 그리고 부분 함수
 *
 * 고차함수란?
 * 또 다른 함수를 반환하는 함수
 *
 * const add = (a: number): (number) => number => (b: number): number => a + b
 */

const mul = (a: number): ((x: number) => number) => (b: number): number =>
  a * b
const result = mul(3)(4)
console.log(result)


/**
 * 좀 더 이해하기 쉬운 형태로 구현하면 다음과 같다
 */

type Number2NumberFunc = (x: number) => number
const add2 = (a: number): Number2NumberFunc => {
  const _add: Number2NumberFunc = (b: number): number => {
    return a + b // 클로저
  }
  return _add
}
console.log(add2(2)(5))

const multiply = (a: number) => (b: number) => (c: number) => a * b * c
console.log(multiply(2)(3)(4))
console.log(multiply(2)(6)) // 부분 적용 함수
