// function to combine classes

export function cns(...classes: (string | undefined | null)[]) {
  return classes.join(' ')
}

console.log(cns('hello', undefined, 'me', null))
