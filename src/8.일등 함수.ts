/**
 * 콜백 함수
 * 
 * 함수 표현식을 매개 변수로 받을 수 있다
 * 매개 변수 형태로 동작하는 함수를 콜백 함수라고 한다.
 */

const gx = (callback: () => void): void => callback()

const init = (callback: () => void): void => {
    console.log('default initialization finished')
    callback()
    console.log('all initialization finished')
}

init(() => console.log('custom initialization finished'))

/**
 * 중첨 함수
 * 함수 안에 또 다른 함수를 사용할 수 있다
 */

const calc = (value: number, callback: (x: number) => void): void => {
    const add = (a: number, b: number) => a + b
    function mul(a: number, b: number) { return a * b }

    const res = mul(add(1, 2), value);
    callback(res)
}
calc(30, (res: number) => console.log(`result: ${res}`))