const binarySearch = (array, left, right, number) => {
	while (left <= right) {
		let mid = parseInt((left + right) / 2);
		if (array[mid] === number) {
			return mid;
		}
		if (array[mid] < number) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return -1;
};

const binarySearchRecursive = (array, left, right, number) => {
	while (left <= right) {
		let mid = parseInt((left + right) / 2);
		if (array[mid] === number) {
			return mid;
		}
		if (array[mid] < number) {
			return binarySearchRecursive(array, mid + 1, right, number);
		} else {
			return binarySearchRecursive(array, left, mid - 1, number);
		}
	}
	return -1;
};

function main() {
	const array = [2, 10, 11, 15, 17, 28, 31, 33, 39, 46];
	const number = 33;
	const length = array.length;
	const result = binarySearch(array, 0, length - 1, number);
	result !== -1 ? console.log(`${number} found at index ${result}`) : console.log(`${number} not found`);
}

main();
