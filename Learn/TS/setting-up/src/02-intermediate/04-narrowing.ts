function example(x?: number | string) {
  if (typeof x === 'string') {
    x.toLocaleLowerCase()
  } else if (typeof x === 'number') {
    x?.toFixed()
  } else if (typeof x === undefined) {
    console.log('no value')
  }
}

function example2(strs: string | string[] | null) {
  // ! if (typeof strs === 'object') {} null also object
  // if (Array.isArray(strs)) {}
  if (strs && typeof strs === 'object') {
    strs.join(', ')
  } else if (typeof strs === 'string') {
    strs.toUpperCase()
  }
}

function example3(x: number[] | Date) {
  if (x instanceof Date) {
    x.getDay()
  } else {
    x.concat([3, 4, 5])
  }
}

type Fish = { swim: () => void }
type Bird = { fly: () => void }

function move(animal: Fish | Bird) {
  if ('swim' in animal) {
    return animal.swim()
  }
  return animal.fly()
}

class BMW {
  bmwDrive() {}
}
const bmw = new BMW()
class AUDI {
  audiDrive() {}
}
const audi = new AUDI()

function whatCar(car: BMW | AUDI) {
  if (car instanceof BMW) {
    car.bmwDrive()
  } else {
    car.audiDrive()
  }
}
