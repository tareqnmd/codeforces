let arraySize = 3;
let top = 0;

const push = (arr, val) => {
	if (top < arraySize) {
		arr[top] = val;
		top++;
		console.log(arr);
	} else {
		console.log('Stack overflow');
	}
};

const pop = (arr) => {
	if (top > 0) {
		arr.length = top-1;
		top--;
		console.log(arr);
	} else {
		console.log('Stack underflow');
	}
};

function main() {
	const arr = [];
	push(arr, 1);
	push(arr, 2);
	push(arr, 3);
	push(arr, 4);
	pop(arr);
	pop(arr);
	pop(arr);
	pop(arr);
	push(arr, 1);
	push(arr, 2);
	push(arr, 3);
}

main();
