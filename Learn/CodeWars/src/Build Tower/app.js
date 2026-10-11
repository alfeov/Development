function towerBuilder(nFloors) {
  let maxBlocks = 2 * nFloors - 1
  let tower = []
  for (let floor = 1; floor <= nFloors; floor++) {
    let nBlocks = 2 * floor - 1
    let emptySpaces = (maxBlocks - nBlocks) / 2 || 0
    tower.push(
      ' '.repeat(emptySpaces) + '*'.repeat(nBlocks) + ' '.repeat(emptySpaces),
    )
  }
  return tower
}
console.log(towerBuilder(2))
