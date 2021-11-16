const bubbleSort = (array, length) => {
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length-i-1; j++) {
			if(array[j]>array[j+1]){
				let temp = array[j];
				array[j] = array[j+1];
				array[j+1] = temp;
			}
		}
	}
	return array;
};

function main() {
	const array = [11, 2, 31, 33, 15, 46, 17, 28, 39, 10];
	const length = array.length;
	const result = bubbleSort(array, length);
	console.log(result);
}

main();