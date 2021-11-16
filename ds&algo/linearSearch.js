const linearSearch = (array, length, number) => {
	for (let i = 0; i < length; i++) {
		if (array[i] === number) {
			console.log(`Found ${number} at index ${i}`);
			return;
		}
	}
	console.log(`${number} not found`);
};

function main() {
	const array = [11, 2, 31, 33, 15, 46, 17, 28, 39, 10];
	const number = 39;
	const length = array.length;
	linearSearch(array, length, number);
}

main();
