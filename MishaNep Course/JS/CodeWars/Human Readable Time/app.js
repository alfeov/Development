function humanReadable(seconds) {
  if (seconds > 359999) {
    throw new Error('wrong format')
  }
  let date = new Date()
  // date.setHours()
  console.log(Math.floor(seconds / 3600)) // hours
  // date.setMinutes()
  let minutes = Math.floor(seconds / 60)
  if (minutes >= 60) minutes = minutes % 60
  console.log(minutes) // minutes
  // date.setSeconds()
  console.log(seconds % 60) // seconds
  // console.log(date)
  // return date;
}
console.log(humanReadable(7199))
// console.log(new Date(2000, 0, 21, 3, 3, 1).toLocaleTimeString('it-IT'))
