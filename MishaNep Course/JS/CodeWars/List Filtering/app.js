function filter_list(arr) {
  return arr.filter((notString) => typeof notString !== 'string')
}
console.log(filter_list(['hello', 1, 2]))
