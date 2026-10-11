export const delay = <T>(callback: () => T, ms: number) =>
  new Promise((res) =>
    setTimeout(() => {
      res(callback())
    }, ms),
  )
