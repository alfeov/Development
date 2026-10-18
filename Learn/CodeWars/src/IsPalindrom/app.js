function isPalindrome(str) {
  const letters = str.toLowerCase().match(/[a-z]/gi)
  return letters?.reverse().join() === letters?.join()
}

console.log(isPalindrome('A man, a plan, a canal, Panama'))
