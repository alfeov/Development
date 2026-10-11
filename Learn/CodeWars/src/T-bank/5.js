const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const [arrayLength, searchedK] = input[0].split(' ').map(Number);
const array = input[1].split(' ').map(Number);

const main = (array, arrayLength, searchedK) => {
	const multiArray = []
	for (let i = 0; i < arrayLength; i++) {
		for (let j = i + 1; j < arrayLength; j++) {
			multiArray.push(array[i] * array[j])
		}
	}

	return multiArray.sort((a, b) => a - b)[searchedK - 1]
}

console.log(main(array, arrayLength, searchedK))