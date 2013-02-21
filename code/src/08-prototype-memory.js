console.log('\nprototype-memory.js');

/*
Save memory by using prototypes 
*/

var f = function() {
};
f.prototype.cords = {
    x : 10,
    y:20
};

var f1 = new f();
var f2 = new f();

f1.cords.x = 20;

console.log(f2.cords.x);




//Incorrect way
function createCar(name) {
    return {
        name : name,
        getMaxSpeed : function() {},
        getSeatingCapacity : function() {},
        getTotalPower : function() {}
    };
}

cars = [];
for(var i=0;i<5000;i++) {
    cars.push(createCar('car'));
};

//Correct way
function car(name) {
    this.name = name;
    return this;
};
car.prototype.getMaxSpeed = function() {};
car.prototype.getSeatingCapacity = function() {};
car.prototype.getTotalPower = function() {};

var cars = [];
for(var i=0;i<5000;i++) {
    cars.push(new car('car'));
};

