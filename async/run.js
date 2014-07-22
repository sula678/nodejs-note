var fs = require('fs');
var async = require('async');

var tasks = [];
var a = ['a', 'b', 'c'];

function iterator(i) {
	
	
	setTimeout(function(){
		
		console.log(a[i]);
		tasks.push(delayedPrint(1000, i, a[i]));

		if (++i == a.length) {
			console.log('done');
			//console.log(tasks);
			//tasks[0];
			async.parallel(tasks, function (err, results) {
			    if (err) {
			        throw err;
			    }
			    console.log('series all done. ' + results);
			});
			
		} else {			
			iterator(i);
      	};
		
	}, 1000);
}

function delayedPrint(delay, text, result) {
  return function(next) {
    setTimeout(function() {
      console.log(text);
      next(null, result);
    }, delay);
  }
}

iterator(0);