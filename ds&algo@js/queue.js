let arraySize = 3;
let head = 0;
let tail = 0;

const enqueue = (arr, val) => {
	if ((tail + 1) % (arraySize + 1) === head) {
		console.log('Queue overflow');
		return;
	}
	arr[tail] = val;
	tail = (tail + 1) % (arraySize + 1);
	console.log(arr);
};

const dequeue = (arr) => {
	if (head === tail) {
		console.log('Queue underflow');
		return;
	}
	arr[head] = ' ';
	head = (head + 1) % (arraySize + 1);
	console.log(arr);
};

function main() {
	const arr = new Array(arraySize + 1).fill(' ');
	enqueue(arr, 1);
	enqueue(arr, 2);
	enqueue(arr, 3);
	enqueue(arr, 4);
	dequeue(arr);
	dequeue(arr);
	dequeue(arr);
	dequeue(arr);
	enqueue(arr, 1);
	enqueue(arr, 2);
	enqueue(arr, 3);
	enqueue(arr, 4);
	dequeue(arr);
}

main();
