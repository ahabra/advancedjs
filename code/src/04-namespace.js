console.log('\nnamespace.js');

// calculateSalary is global on the window object
// somebody else may want to use the same name
function calculateSalary() {
	return 100;
}

// how about this
function cengage_hr_employee_calculateSalary() {
	return 100;
}

// a better way
var cengage = cengage || {};  // this is global
cengage.hr = cengage.hr || {};
cengage.hr.employee = cengage.hr.employee || {}; // tedious huh?

cengage.hr.employee.calculateSalary = function() {
	return 100;
}

// a better way
namespace('cengage.hr.employee'); // we create this function

cengage.hr.employee.calculateSalary = function() {
	return 100;
}

// example implementation
function namespace(ns) {
	var parent= window;
	var parts = ns.split('.');
	for (var i=0; i<parts.length; i++) {
		var part = parts[i];
		parent[part]= parent[part] || {};
		parent= parent[part];
	}
}

