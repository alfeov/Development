const arrOfPairs = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
]
arrOfPairs.sort((a, b) => b[1] - a[1])
console.log(arrOfPairs)

const food = ['Apple', 'Melon', 'Banana', 'Yogurt', 'Orange', 'Stawberry']

const players = [
  {
    id: 1,
    name: 'Cristiano',
    surname: 'Ronaldo',
    club: 'Al-Nassr',
  },
  {
    id: 2,
    name: 'Lamine',
    surname: 'Yamal',
    club: 'Barcelona',
  },
  {
    id: 3,
    name: 'Jude',
    surname: 'Bellingham',
    club: 'Real Madrid',
  },
  {
    id: 4,
    name: 'Bruno',
    surname: 'Fernandes',
    club: 'Manchester United',
  },
  {
    id: 5,
    name: 'Ousmane',
    surname: 'Dembele',
    club: 'PSG',
  },
]

const sorting = (a, b) => {
  if (a > b) return 1
  if (a < b) return -1
  return 0
}
console.log(food.sort(sorting))
console.log(players.sort((a, b) => sorting(a.surname, b.surname)))
