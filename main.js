var addNumbers = function(word) {
	var array = word.split("");
	var total = 0;


	for (var i = 0; i < array.length; i++) {
		if(parseInt(array[i])) {
			var num = array[i];
			var j = i + 1;
			while (parseInt(array[j])) {
				num = num + array[j];
				j++;
			}
			i = j;
			total = total + parseInt(num);
		}
	}
	return total;
}

var longestWord = function(sentance) {
	var sentance = sentance.replace(/[^\w\s]|_/g, "")
         .replace(/\s+/g, " ");
	var array = sentance.split(" ");

	var lengths = [];

	array.map(function(word) {
		lengths.push(word.length);
	})

	var max = Math.max.apply(null, lengths);
	var place = lengths.indexOf(max);
	return array[place];
}

var averageStringNumbers = function(sentance) {
	var sentance = sentance.replace(/[^\w\s]|_/g, "")
         .replace(/\s+/g, " ");
	var array = sentance.split("");
	var counter = 0;
	var total = 0;

	for (var i = 0; i < array.length; i++) {
		if(parseInt(array[i])) {
			total = total + parseInt(array[i]);
		}
		else if (array[i] !== " ") {
			counter++;
		}
	}

	var average = total / counter;

	return Math.round(average);
}

console.log(addNumbers("88Hello 3World!"));
console.log(addNumbers("55Hello"));
console.log(addNumbers("5Hello 5"));

console.log(longestWord("Once upon a time in fairyland."));
console.log(longestWord("Once upon a time in a land far far away!"));

console.log(averageStringNumbers("Hello6 9World 2, Nic8e D7ay!"));