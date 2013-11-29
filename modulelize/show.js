// require core module `file system`
var fs = require( 'fs' );
 
// exports 1 method for other modules or files to use
module.exports = {
  show : function( data ){
    // write to file synchronizely
    console.log( data );
  }
};
