console.log('\nscope.js');
// public / private

// using iife
(function() {

	// everything here is private except what you explicitly expose
	var private1 = 1;

	window.public1= 2;
})();

// private using object instance
function User(name, ssn) {
	this.name = name;

	var salary = parseInt(ssn, 10) / 10000;  // this is private

	this.isRich = function() {
		return salary>40000;
	}
}

// private by convention
function Employee(name, ssn) {
	this.name= name;
	this._salary = parseInt(ssn, 10) / 10000;  // this is private by convention
}

Employee.prototype.isRich = function() {
	return this._salary > 40000;
}

var dora = new Employee('dora', 993121234);
console.log('dora is rich:' + dora.isRich());
console.log('dora salary:' + dora._salary);

