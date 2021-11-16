const selectionSort = (array, length) => {
	for (let i = 0; i < length; i++) {
		let min = i;
		for (let j = i + 1; j < length; j++) {
			if (array[j] < array[min]) {
				min = j;
			}
		}
		if (i !== min) {
			[array[i], array[min]] = [array[min], array[i]];
		}
	}
	return array;
};

function main() {
	const array = [11, 2, 31, 33, 15, 46, 17, 28, 39, 10];
	const length = array.length;
	const result = selectionSort(array, length);
	console.log(result);
}

main();

