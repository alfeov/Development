function CUETrackNameExtractor(str) {
  let arr = str.match(/"[a-zA-Z].+"/g)
  console.log(
    arr[0].slice(1, arr[0].length - 1),
    '-',
    arr[1].slice(1, arr[1].length - 1),
  )
  arr.forEach((str, index) => {
    if (index > 2) {
      console.log(str.slice(1, str.length - 1))
    }
  })
}
let str = `
REM GENRE Metal
REM DATE 2010
REM DISCID 880D650A
REM COMMENT ExactAudioCopy v0.99pb5
PERFORMER "Axel Rudi Pell"
TITLE "The Crest"
FILE "Axel Rudi Pell - The Crest.wv" WAVE
  TRACK 01 AUDIO
    TITLE "Prelude Of Doom (Intro)"
    INDEX 01 00:00:00
  TRACK 02 AUDIO
    TITLE "Too Late"
    INDEX 01 01:32:69
  TRACK 03 AUDIO
    TITLE "Devil Zone"
    INDEX 00 07:29:19
    INDEX 01 07:31:20
  TRACK 04 AUDIO
    TITLE "Prisoner Of Love"
    INDEX 00 13:38:31
    INDEX 01 13:39:26
  TRACK 05 AUDIO
    TITLE "Dreaming Dead"
    INDEX 00 19:33:39
    INDEX 01 19:35:59
  TRACK 06 AUDIO
    TITLE "Glory Night"
    INDEX 00 27:12:63
    INDEX 01 27:15:11
  TRACK 07 AUDIO
    TITLE "Dark Waves Of The Sea"
    INDEX 00 32:59:02
    INDEX 01 33:00:24
  TRACK 08 AUDIO
    TITLE "Burning Rain"
    INDEX 00 40:59:01
    INDEX 01 41:01:10
  TRACK 09 AUDIO
    TITLE "Noblesse Oblige (Opus #5 Adagio Contabile)"
    INDEX 00 46:42:55
    INDEX 01 46:45:14
  TRACK 10 AUDIO
    TITLE "The End Of Our Time"
    INDEX 00 50:52:36
    INDEX 01 50:53:68
`
CUETrackNameExecuter(str)
