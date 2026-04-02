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
