/**
 * 배열의 sort 메서드를 순수 함수로 구현하기
 * Array 클래스는 sort 메서드를 제공해서 배열의 아이템을 
 * 오름차순 또는 내림차순으로 정렬해준다. 그 과정에서 원본 배열이 변경된다.
 * 
 * 아래의 함수를 원본 배열을 건드리지 않은채 배열을 반환하는 함수이다.
 */

export const pureSort = <T>(array: readonly T[]): T[] => {
  let deepCopied = [...array]
  return deepCopied.sort()
}