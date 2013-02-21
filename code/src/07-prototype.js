console.log('\nprototype.js');

/*
A prototype is an object from which other objects inherit properties.

Every object has a prototype.

Prototype is itself an object.
*/

//Accessing prototype
var f1 = function() {

};
console.log(f1.prototype);

var finstance = new f1();
console.log(finstance.prototype);

//How to access prototype of instance ?

console.log(finstance.__proto__);  //Non-standard way

console.log(Object.getPrototypeOf(finstance)); //Correct way
console.log(finstance.constructor.prototype); //Correct way

//Instances do not have prototype property. They have a reference to prototype of their object/class.
console.log(finstance.__proto__ === f1.prototype)


//Creating Object hierarchy / inheritance using prototype

//Parent
var car = function() {
    return this;
};
car.prototype.drive = function() {
	console.log('driving');
}

//Child
var mustang = function() {
    return this;
};
mustang.prototype = new car();  // Setting car as parent of mustang
mustang.prototype.driveFast = function() {
	console.log('driving fast');
};

var mymustang = new mustang();
mymustang.drive();
mymustang.driveFast();


//Updating native objects prototypes
//Valid, but a bad idea
String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
};


