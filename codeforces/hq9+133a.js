'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
	inputString += inputStdin;
});

process.stdin.on('end', (_) => {
	inputString = inputString
		.trim()
		.split('\n')
		.map((string) => {
			return string.trim();
		});

	main();
});

function readLine() {
	return inputString[currentLine++];
}

function main() {
	const iterator = readLine();
	let count = 0;

	for (let i = 0; i < iterator.length; i++) {
		const char = iterator[i];
		if (char === 'H' || char === 'Q' || char === '9') {
			count++;
		}
	}

	if (count>0) {
		console.log('YES');
	} else {
		console.log('NO');
	}
}
