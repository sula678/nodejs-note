module.exports = {
 
  action : '',
 
  pants : 'On',
 
  explode : function( callback ){
    var self = this;
 
    callback && callback.call( this );
 
    this.action = this.pants === 'On' ?
      '尿在褲子上' : '尿尿中';
 
    console.log( this.action );
 
    setTimeout( function(){
      self.pants = self.action === '尿在褲子上' ?
        '我尿褲子了' : '我尿完了';
 
      console.log( self.pants );
    }, 500 );
  }
};
