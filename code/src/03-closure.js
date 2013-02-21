console.log('\nclosure.js');
/*
A closure is a pairing of a function along with its referencing environment such that identifiers 
within the function may refer to the variables within the referencing environment.

*/

var createGreeting = function(greeting) {

    var showAlert = function(name) {
        console.log(greeting + ', ' + name); //access to greetings
    };
	greeting = 'something';
    return showAlert;
};

var helloGreeting = createGreeting('Hello');
helloGreeting('Abdul');

/*
The inner function has been paired with its referencing (as opposed to its calling) environment.

Conceptually, we can think of our closure as the marriage between a function and the environment in which it was declared within.

*/


//Side effects

var i, button;

for(i = 0; i < 3; i++) {
    button = document.createElement("button");
    button.innerText = "Button " + i;
    button.onclick = function() {
			console.log("You just clicked Button " + i);
    };

		$('body').append(button);
}

//How to fix it

var i, button;
for(i = 0; i < 3; i++) {
    button = document.createElement("button");
    button.innerText = "Button " + i;
    button.onclick = (function(x) {
        return function() {
					console.log("You just clicked Button " + x);
        };
    })(i);

	$('body').append(button);
}



