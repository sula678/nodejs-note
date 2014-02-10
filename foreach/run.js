var async = require('async');

var ikemen = 0;
async.eachSeries([ 2, 3, 5, 7, 11 ], function (prime, callback) {
  console.log(prime);
  ikemen = ikemen + prime;
  callback() && callback(); // Alternatively: callback(new Error());
}, function (err) {
  console.log('');
  if (err) { throw err; }
  console.log(ikemen + '\nWell done :-)!');
});




/*
=== java ===
	int z = 0; 	

	try{
		c = a(z);
	}

	catch(e){
		throw e;
	}

	b(c);


=== node js ===

	var z = 0;
	a(z, function(err, c){
		if (err) throw err;
		b(c);
	});

*/