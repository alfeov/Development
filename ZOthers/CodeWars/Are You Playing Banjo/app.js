const areYouPlayingBanjo = (name) =>
  name.charAt(0).toUpperCase() === 'R'
    ? name + ' plays banjo'
    : name + ' does not play banjo'

console.log(areYouPlayingBanjo('Roy Jones Junior'))
