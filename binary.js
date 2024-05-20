const nums = [1,5,6,7,9, 10, 11, 12,13,14]
const binarySearch = function(arr, el){
	let left = 0
	let right = arr.length - 1
	let middle = Math.floor(arr.length / 2)

	while(arr[middle] !== el && left <= right){
		if(el > arr[middle]){
			left = middle + 1
			middle = (right + right) / 2
		}else{
			right = middle - 1
			middle = Math.floor((right + left)/2)
		}
	}
	return arr[middle] === el ? middle : -1


}

console.log(binarySearch(nums, 7))