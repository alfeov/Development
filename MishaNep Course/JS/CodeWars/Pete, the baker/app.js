// ! Reduce

// const cakes = (recipe, available) => {
//   return Object.entries(recipe).reduce((cakes, item) => {
//     if (!available[item[0]]) return 0
//     let newCakes = Math.floor(available[item[0]] / item[1])
//     if (newCakes < cakes) return newCakes
//     return cakes
//   }, Infinity)
// }

// ! Math.min Map

const cakes = (recipe, available) => {
  return Math.min(
    ...Object.keys(recipe).map((key) => available[key] / recipe[key] || 0),
  )
}

console.log(cakes({ banana: 1, flour: 200 }, { banana: 1 }))
