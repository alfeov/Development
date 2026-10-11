function fromPair(pair: [string, string]) {
  const [key, value] = pair

  return {
    [key]: value,
  }
}

type T0 = ReturnType<typeof fromPair>
type T1 = Parameters<typeof fromPair>

type T2 = ConstructorParameters<ErrorConstructor>
