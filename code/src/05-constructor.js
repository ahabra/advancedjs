console.log('\nconstructor.js');

// by convention, capitalize 1st letter of constructor
function Animal(family, legs) {
	this.family= family;
	this.legs= legs;
	return this;
}

var lucy= new Animal('cow', 4);
console.log('lucy.family=' + lucy.family);

var sparky= Animal('dog', 4);
var zee= Animal('bird', 2);

console.log('sparky.family=' + sparky.family); // ??
console.log('sparky.legs=' + sparky.legs); // ??

function SafeAnimal(family, legs) {
	// discuss why not to family var as 'self'
	var me = this instanceof SafeAnimal?
		            this : Object.create(SafeAnimal.prototype);
	me.family = family;
	me.legs = legs;
	return me;
}

var bob = new SafeAnimal('sponge', 2);
var touche = SafeAnimal('turtle', 4);
var woody = SafeAnimal('wood pecker', 2);

console.log('bob.family=' + bob.family);
console.log('touche.family=' + touche.family);
console.log('woody.family=' + woody.family);

