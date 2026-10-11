function tuplePairCreator<T>(first: T) {
  return function <U>(second: U): [T, U] {
    return [first, second]
  }
}

const toTupleWith1 = tuplePairCreator(1)
const val1 = toTupleWith1('sd')
