function solution(text, markers) {
  return text
    .split('\n')
    .map((line) => {
      let start = Infinity
      for (let marker of markers) {
        let index = line.indexOf(marker)
        if (index < start && index !== -1) start = index
      }
      return line.slice(0, start).trimEnd()
    })
    .join('\n')
}

console.log(solution('  aa #bb !cc  \nbb ', ['#', '!']))
