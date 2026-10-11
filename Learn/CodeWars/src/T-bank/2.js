const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const [fieldLength, rounds] = input[0].split(' ').map(Number); // n, t
const turns = input[1].split(' ').map(Number); // t

const getCellCoordinates = (cellNumber) => {
	const x = Math.floor((cellNumber - 1) / fieldLength);
	const y = (cellNumber - 1) % fieldLength;
	return [x, y];
}

const main = (fieldLength, rounds, turns) => {
	let result = -1

	const rows = new Array(fieldLength).fill(0);
	const cols = new Array(fieldLength).fill(0);
	let diag1 = 0;
	let diag2 = 0;

	for (let round = 0; round < rounds; round++) {
			const cellNumber = turns[round];
			const [x, y] = getCellCoordinates(cellNumber);
			
			rows[x]++;
			cols[y]++;
			
			// Проверяем диагонали
			if (x === y) diag1++;
			if (x + y === fieldLength - 1) diag2++;
			
			const hasWinLine =rows[x] === fieldLength || cols[y] === fieldLength || diag1 === fieldLength || diag2 === fieldLength
			if (hasWinLine) {
					result = round + 1
					return result
			}
	}
	return result
}

console.log(main(fieldLength, rounds, turns))