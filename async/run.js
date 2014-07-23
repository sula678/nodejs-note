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
			    haha(2, 3, function(err, srcsrc2){
					if(err) console.log(err);
					console.log(srcsrc2);
				})
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



haha = function (src, src2, callback) {
	setTimeout(function() {
		console.log("1: " + src);
		console.log("2: " + src2);
		callback && callback(null, src + src2);
	}, 2000);
}

