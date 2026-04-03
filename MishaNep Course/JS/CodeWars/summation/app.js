const summation = (num) => {
  if (num !== 0) {
    return num + summation(--num)
  } else {
    return 0
  }
}

console.log(summation(8))
