var riddle = {
  question: 'Висит груша нельзя скушать',
  correctAnswer: 'лампочка',
  hints: ['это несъедобное', 'это не фрукт'],
  currentHintIndex: 0,
  tries: 3,
  checkAnswer(userAnswer) {
    // TODO: написать логику проверки правильного ответа
    // alert для пользователя, console.log()
    if (this.tries) {
      if (this.correctAnswer.toLowerCase() === userAnswer.toLowerCase()) {
        alert('Угадали')
        console.log('Угадали')
      } else {
        this.tries--
        alert('не угадали')
        console.log('не угадали')
        if (this.currentHintIndex < this.hints.length) {
          console.log('Подсказка:', this.hints[this.currentHintIndex])
          alert('Подсказка: ' + this.hints[this.currentHintIndex])
          this.currentHintIndex++
        }
      }
    } else {
      console.log('Попытки закончились')
      alert('Попытки закончились')
    }
  },
}

window.onload = function () {
  document.getElementById('riddle').innerText = riddle.question
}

function check() {
  var input = document.getElementsByTagName('input')[0]

  var guessedAnswer = input.value

  if (guessedAnswer) {
    // TODO: вызвать функцию checkAnswer у объекта загадки, передав туда ответ
    riddle.checkAnswer(guessedAnswer)
  }
}
