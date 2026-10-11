function pickPeaks(arr) {
  let result = { pos: [], peaks: [] }
  arr.reduce((prev, curr, index) => {
    if (curr > prev && curr > arr[index + 1]) {
      result.pos.push(index)
      result.peaks.push(curr)
      // return will stop next code execution because we find a peak
      return curr
    }
    // check for plateau presence
    if (curr === arr[index + 1]) {
      if (
        // if num before plateau less then curr condition after && will not processing
        // it is means that number after start of plateau will be equal to prev number and operation will not perform
        curr > arr[index - 1] &&
        // finding end of plateau and compare to curr
        curr > arr.slice(index + 2).find((n) => n !== curr)
      ) {
        result.pos.push(index)
        result.peaks.push(curr)
      }
    }
    return curr
  }, Infinity)
  return result
}

console.log(pickPeaks([3, 2, 3, 6, 4, 2, 2, 1, 2, 2, 1]))
