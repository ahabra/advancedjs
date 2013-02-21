console.log('\nfunctional/foreach.js');

(function(){

	var names = ['bob', 'dora', 'barney'];
	names.forEach(function(value, index) {
		console.log(value + ' at index ' + index);
	});

})();