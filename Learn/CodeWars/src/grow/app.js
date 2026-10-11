const grow = (x) => {
  if (x.length !== 0) {
    let res = 1
    for (let i = 0; i < x.length; i++) {
      res *= x[i]
    }
    return res
  } else {
    return undefined
  }
}

console.log(grow([1, 6]))
