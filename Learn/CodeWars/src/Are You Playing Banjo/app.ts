export const areYouPlayingBanjo = (name: string) =>
  name.charAt(0).toUpperCase() === 'R'
    ? name + ' plays banjo'
    : name + ' does not play banjo'
