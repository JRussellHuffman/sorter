function sorter (array) {
	var outPutArray = createEmptyArray(array) //make an empty array as an output
	for (var i = 0; i < array.length; i++) { //loop through array
		var arrayLocation = loopThrough(array, array[i]) //determine where i should go
		var checkForNull = checkLocation(outPutArray, arrayLocation); //see if that spot is already taken (for duplicate numbers)
		arrayLocation = checkForNull; //update if spot is already taken. otherwise they are the same
		outPutArray[arrayLocation] = array[i]; //place i in correct spot
	};
	return outPutArray;
}

function checkLocation (array,e) {
	if (array[e] != null) {
		e ++;
		e = checkLocation (array,e) //recursively check proceding locations
		return e;
	} else {
		return e;
	}
}

function loopThrough(array, e) {
	var largerThan = 0;
	for (var i = 0; i < array.length; i++) {
		if (e > array[i]) {
			largerThan ++; //how many numbers is is it larger than?
		}
	};
	return largerThan; //this becomes it's location in the output array
}

function createEmptyArray(array) {
	var empty = []
	for (var i = 0; i < array.length; i++) {
		empty.push(null)
	};
	return empty;
}

//original array
var listofNumbers = [1,7,5,4,9,2, 8, 92, 33, 5000, -3, 9, 9, 9, 5, 5, 5, 5];

listofNumbers = sorter(listofNumbers) //sorts
console.log(listofNumbers); //numbers are in order!