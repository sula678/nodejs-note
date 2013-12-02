// to use methods from other files we simply use `require` with path name
var reader = require( './read' ),
shower = require( './show' );

console.log("start read file");
reader.read( './source.txt', function( data ){
console.log("finish read file");


	setTimeout( function(){    
		for(var i = 0 ; i < data.length-1 ; i++) {
			//console.log(data[i].toString());
		
			    

				step1(data[i], function(err, changed){
			//		setTimeout( function(){
					if(err) throw err;
					step2(changed, function(err){
						if(err) throw err;
						shower.show( data[i] );			
					});
				
			//	}, 1000);
			});
		}		
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
