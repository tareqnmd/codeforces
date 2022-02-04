const insertionSort = (array, length) => {
	for (let i = 1; i < length; i++) {
		let item = array[i];
		let j = i-1;
		while (j >= 0 && array[j] > item) {
			array[j+1] = array[j];
			j--;
		}
		array[j+1] = item;
	}
	return array;
};

function main() {
	const array = [11, 2, 31, 33, 15, 46, 17, 28, 39, 10];
	const length = array.length;
	const result = insertionSort(array, length);
	console.log(result);
}

main();
