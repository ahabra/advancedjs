console.log('\nfunctional/reduce.js');

(function(){
	var food = [{name:'milk', price:3}, {name:'bread', price:1},
		          {name:'oranges', price:5}];

	var cost = food.reduce(function(previousValue, currentValue) {
		return previousValue + currentValue.price;
	}, 0);

	console.log('cost: ' + cost);

	var nums= [1, -99, 1000, 73, 6666];
	var max = nums.reduce(function(previousValue, currentValue) {
		return Math.max(previousValue, currentValue);
	}, nums[0]);

	console.log('max= ' + max);
})();
