// 참고: https://github.com/darkreader/darkreader

function isArrayLike<T>(items: Iterable<T> | ArrayLike<T>): items is ArrayLike<T> {
  return (items as ArrayLike<T>).length != null;
}

// 참고: 'for .. of'를 사용하여 유사배열 항목을 반복하는 것은 3배정도 느립니다.
// iterable일 경우, for of를  사용합니다.
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

// 참고:Spread Operator 보다 3배정도 더 빠릅니다.
// Nested forEach algorithm is linear: O(n)
// Spread Operator algorithm is exponential: O(2^n)
// https://jsben.ch/RhtPT
export function push<T>(array: T[], addition: Iterable<T> | ArrayLike<T>) {
  forEach(addition, (a) => array.push(a));
}

// ArrayLike를 진짜 Array로 만들어줍니다.
// 이때, Array.from()을 사용하는 것보다 for+push를 사용하는 게 최대 5배정도 빠릅니다. (Iterable이 아닌 경우)
// https://jsben.ch/FJ1mO
// https://jsben.ch/ZmViL
export function toArray<T>(items: ArrayLike<T>) {
  const results = [] as T[];
  for (let i = 0, length = items.length; i < length; i++) {
    results.push(items[i]);
  }
  return results;
}
