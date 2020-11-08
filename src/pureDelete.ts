/**
 * filter 메서드를 이용한 순수 삭제
 * 배열에서 특정 아이템을 삭제하기 위해서는 splice 메서드를 사용한다.
 * 그러나 splice는 원본을 변경하기 때문에 순수 함수에서는 사용할 수 없다.
 * 
 * 아래 함수는 filter 메서드는 이용해서 원본 내용을 변경하지 않는 함수이다.
 */

export const pureDelete = <T>(array: readonly T[], cb: (val: T, index?: number) => boolean): T[] => {
  return array.filter((val, index) => cb(val, index) == false)
}