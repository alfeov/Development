const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split(' ');
const arrayLength = parseInt(input[0]); // n
const inversions = parseInt(input[1]); // k

const main = (arrayLength, inversions) => {
	const result = [];

	let remainingInv = inversions;

	let leftCounter = 1;
	let rightCounter = arrayLength;

	for (let i = 0; i < arrayLength; i++) {
		const inversionWithCurrentElement = arrayLength - i - 1;

		// если инверсия с текущим элементом не съест инверсий больше чем нужно
		if (remainingInv >= inversionWithCurrentElement) {
			result.push(rightCounter);
			rightCounter--;
			remainingInv -= inversionWithCurrentElement;
		} else {
			result.push(leftCounter);
			leftCounter++;
		}

	}

	return result
}

console.log(main(arrayLength, inversions))