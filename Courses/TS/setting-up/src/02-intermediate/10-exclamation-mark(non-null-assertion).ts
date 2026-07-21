function pringName(name?: string) {
  const fullName: string = name!
}

interface Person {
  name: string
  age: number
}

function frintName2(person?: Person) {
  console.log(person!.name)
}
