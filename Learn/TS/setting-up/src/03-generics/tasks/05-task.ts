function keys<T extends object>(obj: T): (keyof T)[] {
  const currentKeys = []

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) currentKeys.push(key)
  }

  return currentKeys
}

function values<T extends object>(obj: T): T[keyof T][] {
  const currentValues = []

  for (let key in obj) {
    currentValues.push(obj[key])
  }

  return currentValues
}
