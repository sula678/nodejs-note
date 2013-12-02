module.exports = {
 
  ringing : '',
 
  ring : function( callback ){
    var self = this;
 
    this.ringing = '電話響了';
    console.log( this.ringing );
 
    callback && callback.call( this );
 
    setTimeout( function(){
      self.ringing = '電話不響了';
      console.log( self.ringing );
    }, 1000 );
  }
};
