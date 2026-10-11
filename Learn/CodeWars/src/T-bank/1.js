const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n')

const length = Number(input[0])
const array = input[1].split(' ').map(Number);

const YES = '<<YES>>'
const NO = '<<NO>>'

const main = (length, array) => {
	const set = new Set(array)
	const unique = [...set].sort((a, b) => a - b)
	
	const map = new Map()
	for (const num of array) {
		const valueExistedInMap = map.get(num)
		const count = valueExistedInMap ? valueExistedInMap + 1 :  1
		map.set(num, count)
	}

	console.log(set, map)

	if (unique.length > 3 || unique.length === 1) 
		return NO

	if (unique.length === 2) {
		const [first, second] = unique
		if (map.get(first) !== 2) {
			return NO
		}
		if (first * 2 !== second) {
			return NO
		}
		return YES
	}
	if (unique.length === 3) {
		const [first, second, third] = unique
		if (map.get(third) !== length - 2) {
			return NO
		}
		if (first + second !== third) {
			return NO
		}

		return YES
	}

	// на всякий случай
	return NO
}

console.log(main(length, array))