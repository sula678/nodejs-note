// require core module `file system`
var fs = require( 'fs' );
 
// exports 2 methods for other modules or files to use
module.exports = {
  read : function( path, callback ){

    fs.readFile( path, function(err, datass){
  		callback && callback( datass.toString());  
		});
 		
   
  },
 
  print : function( data ){
    console.log( data );
  }
};


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
