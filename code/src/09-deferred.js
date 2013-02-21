console.log('\ndeferred.js');

var data = {a : 0, b:0};

function calculateA() {
    var deferred = $.Deferred();
    setTimeout(function() {
        data.a = 10;
        console.log('calculation done for a');
        deferred.resolve();
    }, 500);
    return deferred;
}

function calculateB() {
    var deferred = $.Deferred();
    setTimeout(function() {
        data.b = 15;
        console.log('calculation done for b');
        deferred.resolve();
    }, 300);
    return deferred;
}

$.when(calculateA(), calculateB()).then(function() {
    console.log(data.a + data.b);
});


//Resolving with arguments
(function(){
function calculateA() {
    var deferred = $.Deferred();
    setTimeout(function() {
        var a = 10;
        deferred.resolveWith(null, [a]);  //first argument is the context
    }, 500);
    return deferred;
}

function calculateB() {
    var deferred = $.Deferred();
    setTimeout(function() {
        var b = 15;
        deferred.resolveWith(null, [b]);
    }, 300);
    return deferred;
}

$.when(calculateA(), calculateB()).then(function(a,b) {
	console.log(a+b);
});
})();

//Tracking progress
(
function doLongCalculation() {
    var deferred = $.Deferred();
    deferred.progress(function(percentDone) {
        console.log('Proress: ',percentDone);
    });

    deferred.notifyWith(null, [0]);

    setTimeout(function() {
        deferred.notifyWith(null, [50])

        setTimeout(function() {
            deferred.notifyWith(null, [100]);
        }, 1000);

    }, 1000);
    
}
)();
