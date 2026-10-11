const censor = () => {
  const pairsStorage = {}
  return (value1, value2 = null) => {
    if (!value2) {
      for (const pair in pairsStorage)
        value1 = value1.replaceAll(pairsStorage[pair][0], pairsStorage[pair][1])
      return value1
    }
    pairsStorage[Object.keys(pairsStorage).length + ' pair'] = [value1, value2]
  }
}

const changeScene = censor()

changeScene('PHP', 'JS')

changeScene('backend', 'frontend')

console.log(
  changeScene(
    'PHP is the most popular programming language for backend web-development',
  ),
)


// function censor() {
//     const pairs = []
//     return (replaceableOrSentence, replacement = null) => {
//         const hasSecondArgument = replacement !== null
//         if (hasSecondArgument) return pairs.push([replaceableOrSentence, replacement])
        
//         return pairs.reduce((acc, pair) => {
//             return acc.replaceAll(pair[0], pair[1])
//         }, replaceableOrSentence)
//     }
// }