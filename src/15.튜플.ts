/**
 * 튜플
 * 
 * const tuple: [boolean, string] = [true, 'the result is ok']
 */

/**
 * 튜플에 타입 별칭 사용하기
 * 타입 별칭을 통해 어떤 용도로 사용되는지 알려주는 것이 좋다.
 */
export type ResultType = [boolean, string]

const doSomething = (): ResultType => {
  try {
    throw new Error('Some error occures...')
  } catch(err) {
    return [false, err.message]
  }
}

/**
 * 튜플의 비구조화 할당
 */

const [result, errorMsg] = doSomething()
console.log(result, errorMsg)