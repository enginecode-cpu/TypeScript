/**
 * filter 메서드를 이용한 순수 삭제
 */

export const pureDelete = <T>(array: readonly T[], cb: (val: T, index?: number) => boolean): T[] => {
  return array.filter((val, index) => cb(val, index) == false)
}