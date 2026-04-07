const humanReadable = (totalSeconds) => {
  if (totalSeconds > 359999) throw new Error('time is out of border')
  if (!Number.isInteger(totalSeconds))
    throw new Error(totalSeconds, "is't an integer")
  if (totalSeconds < 0) throw new Error("time can't be negative number")
  let hours = Math.floor(totalSeconds / 3600)
  let minutes = Math.floor((totalSeconds % 3600) / 60)
  let seconds = totalSeconds % 60
  const numToTwoDigitString = (num) => (num < 10 ? '0' + num : num)
  return [
    numToTwoDigitString(hours),
    numToTwoDigitString(minutes),
    numToTwoDigitString(seconds),
  ].join(':')
}
console.log(humanReadable(90))
