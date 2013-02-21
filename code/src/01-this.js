console.log('\nthis.js');

// Core function invocation primitive in javascript :
// 				Function.call method
// Syntax :
// function.call(context, arg1, arg2…)


function hello(thing) {
	console.log(this + ' says hello ' + thing);
}

hello.call(window, 'world');

hello('abdul');   //same as hello.call(window, ‘world’);


// Member Functions

var person = {
	name : 'Abdul',
	hello : function(thing) {
		console.log(this.name + ' says hello ' + thing);
	}
};

person.hello('world');
//same as
person.hello.call(person, 'world');



// What will be the output of following script

var person = {
	name : 'Abdul',
	delayedHello : function(thing) {
		var self = this;
		setTimeout(function() {
            		console.log(self.name + ' says ' + thing);
        	}, 200);	
	}
};

person. delayedHello ('world');


//Binding a context
var bound = person.delayedHello.bind(person)
bound('world');

