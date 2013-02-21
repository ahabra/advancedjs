console.log('\nfunctional/filter.js');

(function(){
	var names = [{name:'bob', sex:'m'}, {name:'dora', sex:'f'},
		{name:'barney', sex:'m'}];

	var boys = names.filter(function(value) {
		return value.sex === 'm';
	});
	console.log(boys);
})();
