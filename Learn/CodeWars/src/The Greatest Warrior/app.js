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

  battle(enemyLevel) {
    if (!(enemyLevel >= 1 && enemyLevel <= 100)) {
      return 'Invalid level'
    }
    const diff = enemyLevel - this.#level
    let response = 'Easy fight'
    if (diff > 0) {
      if (
        Math.floor(this.#level / 10) !== Math.floor(enemyLevel / 10) &&
        diff >= 5
      )
        return "You've been defeated"
      response = 'An intense fight'
      this.#increaseExperience(20 * diff * diff)
    } else if (diff === 0) {
      response = 'A good fight'
      this.#increaseExperience(10)
    } else if (diff === -1) {
      response = 'A good fight'
      this.#increaseExperience(5)
    }

    return response
  }
  training([achievementDescription, experienceGain, levelReq]) {
    if (this.#level < levelReq) return 'Not strong enough'
    this.#achievements = [...this.#achievements, achievementDescription]
    this.#increaseExperience(experienceGain)
    return achievementDescription
  }

  #increaseExperience(experienceGain) {
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
    this.#level = Math.floor(this.#experience / 100)
  }
}
