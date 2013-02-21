console.log('\nfunctional/map.js');

(function(){
	var names = ['bob', 'dora', 'barney'];
	var capitalized = names.map(function(value) {
		return value.toUpperCase();
	});

	console.log('capitalized=' + capitalized);

})();
