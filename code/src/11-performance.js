console.log('\nperformance.js');

(function(){

	// tip1: use === for comparision
	function finder1(array, v) {
		for (var i=0; i<array.length; i++) {
			if (array[i] == v) {
//			if (array[i] === v) { // this will not cause type coercion
				return true;
			}
		}
		return false;
	}


	// tip2-v8: use integers if u can
	var a=7;  // 31-bit signed integer
	var b=7.1;  // double

	// tip3-v8: arrays

	// create dictionary type array
	var slow= [];
	slow[2] = 'a';
	slow[1] = 'b';
	slow[0] = 'c';
	slow[4] = 'd';

	// create contiguous initialized array
	var fast= ['a', 'b', 'c', 'd', 5];


	// tip3-v8: hidden classes: define all class members in constructor
	function User(id,name) {
		this.id= id;
		this.name= name;
	}
	var u1=new User(1, 'dora');
	var u2=new User(2, 'bob');
	// now u1 and u2 share same hidden class
	u2.age = '7';
	// ouch, u2 has its own hidden class


	// tip4-v8: do not overload function args type
	function add(a,b) {
		return a+b;
	}
	add(1,2);  // v8 will cache this type
	add('x', 'y');  // type caching will be invalidated

	// tip5-v8: extract performance sensitive code in try/catch to a function
	try {
		mustBeFast();
	} catch(e) {
		// handle e
	}

	function mustBeFast() {
		// whatever
	}

})();