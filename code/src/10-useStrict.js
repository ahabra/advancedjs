console.log('\nuseStrict.js');

(function(){

	function f1() {
		a=1;
		return a;
	}

	function f2() {
		'use strict';
		//b=1;  // no accidentally global vars
		return b;
	}

	function f3() {
		//'use strict';
		return {k:1, k:2};  // no dup keys
	}

	function f4(a, a, b) {
		//'use strict';   // unique arg names
	}

	function f5() {
		//'use strict';
		NaN = 42;  // assignment to read-only properties will throw exception
		return NaN;
	}

	console.log('f1()=' + f1());
	console.log('f2()=' + f2());
	console.log('f3()=' + f3());
	console.log('f4()=' + f4());
	console.log('f5()=' + f5());

})();