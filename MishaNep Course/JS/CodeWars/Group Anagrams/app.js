const groupAnagrams = (anagrams) => {
  let anagramsSorted = anagrams.map((anagram) =>
    anagram.split('').sort().join(''),
  )
  let anagramsSets = [...new Set(anagramsSorted)]
  return anagramsSets.map((set) =>
    anagrams.filter((anagram, index) => set === anagramsSorted[index]),
  )
}
