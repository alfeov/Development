type Fish = { swim: () => void }
type Bird = { fly: () => void }

const isFish = (pet: Fish | Bird): pet is Fish => 'swim' in pet

const isBird = (pet: Fish | Bird): pet is Bird =>
  (pet as Bird).fly !== undefined

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    return animal.swim()
  } else if (isBird(animal)) {
    return animal.fly()
  }
}
