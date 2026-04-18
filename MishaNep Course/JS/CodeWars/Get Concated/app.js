function getConcated(arr) {
  arr = arr
    .filter((el) => !(el.expired === true))
    .sort((a, b) => a.order - b.order)
  return [...new Set(arr.flatMap((el) => el.value.split('').reverse()))].join(
    '',
  )
}
