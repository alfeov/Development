class Warrior {
  #level
  #rank
  #experience
  #achievements
  constructor() {
    this.#level = 1
    this.#rank = 'Pushover'
    this.#experience = 100
    this.#achievements = []
  }
  level() {
    return this.#level
  }
  rank() {
    return this.#rank
  }
  experience() {
    return this.#experience
  }
  achievements() {
    return this.#achievements
  }

  battle(enemyLevel) {}
  training([achievementDescription, experienceGain, levelReq]) {
    if (this.#level < levelReq) return 'Not strong enough'
    this.#achievements = [...this.#achievements, achievementDescription]
    this.#experience = Math.min(this.#experience + experienceGain, 10000)
    this.#changeRank()
    this.#changeLevel()
  }

  #changeRank() {
    const ranks = [
      'Pushover',
      'Novice',
      'Fighter',
      'Warrior',
      'Veteran',
      'Sage',
      'Elite',
      'Conqueror',
      'Champion',
      'Master',
      'Greatest',
    ]
    this.#rank = ranks[Math.floor(this.#experience / 1000)]
  }

  #changeLevel() {
    this.#level = this.#experience / 100
  }
}
