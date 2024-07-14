function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const merged = merge({ a: 1, b: 2 }, { c: 3, d: 4 })

console.log(merged);