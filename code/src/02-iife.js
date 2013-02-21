console.log('\niife.js');
// iife: Immediately Invoked Function Expression


// if the api is only interested in isPrime1(), why are we exposing the array?
var primes1 = [2,3,5,7,11,13,17,19, 23, 29];

function isPrime1(number) {
	return primes1.indexOf(number) >= 0;
}



(function() {
	// code here execute w.o. accidentally adding stuff to global name space

	var primes2 = [3.14, 2.718, 1.618, 81];

	function isPrime2(number) {
		return primes2.indexOf(number) >= 0;
	}

	window.isPrime2 = isPrime2;
})();
