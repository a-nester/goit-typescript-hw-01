function merge<T, U>(objA: T, objB: U) {
  return Object.assign({}, objA, objB);
}

const merged = merge({ a: 1, b: 2 }, { c: 3, d: 4 })

console.log(merged);