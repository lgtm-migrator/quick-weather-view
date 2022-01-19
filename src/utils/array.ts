function isArrayLike<T>(items: Iterable<T> | ArrayLike<T>): items is ArrayLike<T> {
  return (items as ArrayLike<T>).length != null;
}

// 참고: 'for .. of'를 사용하여 유사배열 항목을 반복하는 것은 Firefox에서 3배정도 느립니다.
// 때문에 유사배열일 경우, 길이가 캐시된 기본 for문을 사용합니다.
export function forEach<T>(items: Iterable<T> | ArrayLike<T>, iterator: (item: T) => void) {
  if (isArrayLike(items)) {
    for (let i = 0, length = items.length; i < length; i++) {
      iterator(items[i]);
    }
  } else {
    for (const item of items) {
      iterator(item);
    }
  }
}
