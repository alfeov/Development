var secretNum = Math.ceil(Math.random() * 10)
var tries = 0
var win = 0

function guessNum(num) {
  if (win === 1) {
    return console.log('Игра окончена: Вы уже угадали нужное число')
  }
  if (tries >= 5) {
    return console.log('Игра окончена: Попытки закончились')
  }
  if (secretNum === num) {
    console.log('Угадали')
    win = 1
  } else {
    console.log('Не угадали')
    tries++
    if (secretNum < num) {
      console.log('Загаданное число меньше')
    } else {
      console.log('Загаданное число больше')
    }
  }
}
