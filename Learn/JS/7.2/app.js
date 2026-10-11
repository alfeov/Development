// 1

const arr = [10, 1, 21, 1, 33, 3, 33, 5, 8, 8, 1, 3, 5]
// ! without lodash
// const sortedArr = [...new Set(arr)].sort((a, b) => a - b)
// console.log(sortedArr)
// ! with lodash
const sortedArr = _.sortedUniq(_.sortBy(arr))
console.log(sortedArr)

// 2

const userSkills = {
  css: 'b2',
  html: 'c1',
  js: 'a2',
  ts: null,
  react: undefined,
  vue: null,
  lodash: 'a1',
}

// ! without lodash
// const userApprovedSkills = Object.entries(userSkills).reduce(
//   (acc, [key, value]) => {
//     if (value) {
//       acc[key] = value
//     }
//     return acc
//   },
//   {},
// )
// console.log(userApprovedSkills)
// ! with lodash

const userApprovedSkills = _.pickBy(userSkills, (value) => Boolean(value))
// const userApprovedSkills = _.omitBy(userSkills, _.isNil)
console.log(userApprovedSkills)
