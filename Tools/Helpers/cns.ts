// function to combine classes

export function cns(...classes: (string | undefined)[]) {
  return classes.join(' ')
}
