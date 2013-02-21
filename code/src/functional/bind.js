console.log('\nfunctional/bind.js');

(function(){

	// usage 1: safe this

	window.x=5;  // this is bad
	var point = {x:10, y:20, getX:function() {return this.x} };
	var getX = point.getX;
	var safeGetX = getX.bind(point);
	console.log('point.getX()=' + point.getX());   // 10
	console.log('getX()=' + getX());               // 5
	console.log('safeGetX()=' + safeGetX());       // 10


	// usage 2: partial functions

	console.log('calling uglyMagic');
	function uglyMagic(name, url, month, isbn, index) {
		// do whatever
		console.log(index);
	}
	for (var i=0; i<3; i++) {
		// notice how we are repeating the same args for each call
		uglyMagic('bob', 'www.bob.com', 'March', '123456789', i);
	}

	console.log('calling bobMagic');
	var bobMagic = uglyMagic.bind(undefined,
				'bob', 'www.bob.com', 'March', '123456789');
	for (var i=10; i<13; i++) {
		bobMagic(i);
	}


})();
