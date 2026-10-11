type Status = 'fetching' | 'idle' | 'error'
const status: Status = 'idle'

function printId(id: string | number): void {
  let formattedString: unknown
  if (typeof id === 'string') {
    console.log(id.toUpperCase())
  } else {
    console.log(id)
  }
}

function welcome(person: [string, string] | string) {
  if (Array.isArray(person)) console.log('Welcome ', person.join(' '))
  console.log('Welcome', person)
}

const arr: (string | number)[] = []
