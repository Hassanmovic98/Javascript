let obj = {
    name: "Sourav",
    age: 23,
    job: "Developer"
};
console.log(obj);



function sum(x, y) { 
    return x + y; 
}
console.log(sum(6, 9));




const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = [];

for (let i = 0; i < array1.length; i++) {
    mergedArray.push(array1[i]);
}

for (let i = 0; i < array2.length; i++) {
    mergedArray.push(array2[i]);
}

console.log(mergedArray);










const arr = [10, 20, 25, 100, 40];

function bubbleSort(arr) {
	let n = arr.length;

	
	const arr = [10, 20, 25, 100, 40];

function bubbleSort(arr) {
	let n = arr.length;

	// Traverse through all array elements
	for (let i = 0; i < n - 1; i++) {
    
		for (let j = 0; j < n - 1 - i; j++) {
			// Swap if element is greater than next index
			if (arr[j] > arr[j + 1]) {
            	[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}

	}
	return arr;
}

console.log(bubbleSort(arr));