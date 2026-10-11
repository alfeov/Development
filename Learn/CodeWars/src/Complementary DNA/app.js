const dnaStrand = (dna) => {
  let dnaBase = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G',
  }
  return dna
    .split('')
    .map((char) => dnaBase[char])
    .join('')
}
console.log(dnaStrand('ATTGC'))
