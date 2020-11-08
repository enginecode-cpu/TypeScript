/**
 * 가변 인수 함수와 순수 함수
 * 함수를 호출할 때 전달하는 인수의 개수를 제한하지 않는 것을 가변 인수라고 한다.
 * arrays 앞에 ...은 잔여나 전개 연산자가 아니라 가변 인수이다.
 */

export const mergeArray = <T>(...arrays: readonly T[][]): T[] => {
  let result: T[] = []
  for (let index = 0; index < arrays.length; index++) {
    const array: T[] = arrays[index]

    result = [...result, ...array]
  }
  return result
}