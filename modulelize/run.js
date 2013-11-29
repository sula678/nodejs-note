// to use methods from other files we simply use `require` with path name
var reader = require( './read' ),
    shower = require( './show' );
 

reader.read( './source.txt', function( data ){

	setTimeout( function(){    
		
		step1(data, function(err, changed){
      if(err) throw err;
			step2(changed, function(err){
        if(err) throw err;
      	shower.show( data );			
	    });
		});		
	}, 1000 );


	
});

step1 = function(data, callback){
  var changed = data.replace( 'I am', 'You are' );
	if(false){ // if problem happens
     callback(new Error("PROBLEM IN STEP1"));
  }
	callback(null, changed);
}

step2 = function(data, callback){
	reader.print(data);
  if(false){ // if problem happens
     callback(new Error("PROBLEM IN STEP2"));
  }
	callback(null);
}
