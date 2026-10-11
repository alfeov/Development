// const solution = (str, ending) => str.slice(str.lastIndexOf(ending)) === ending
const solution = (str, ending) => str.endsWith(ending)

console.log(solution('abc', 'bc'))
