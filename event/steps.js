module.exports = {
 
  cup_noodles : '這是還沒煮的泡麵',
 
  make_cup_noodles : function( callback ){
    var self = this;
 
    console.log( '開始泡泡麵' );
 
    // 模擬需要長時間的函式
    setTimeout( function(){
      self.cup_noodles = self.cup_noodles === '這是還沒煮的泡麵' ?
        '泡麵煮好了' : self.cup_noodles;
 
      console.log( self.cup_noodles );
 
      callback && callback.call( this );
    }, 3000 );
  },
 
  answer_a_phone_call : function(){
    var action = this.ringing === '電話響了' ?
        '我接了這通電話' : '我錯過了這通電話';
 
      console.log( action );
  },
 
  go_to_toilet : function(){
    this.pants = 'Off';
  },
 
  eat_the_noodles : function( callback ){
    var self = this;
 
    setTimeout( function(){
      self.cup_noodles = self.cup_noodles === '泡麵煮好了' ?
        '我吃完了' : '我啥都沒吃到...'
 
      console.log( self.cup_noodles );
 
      callback && callback.call( this );
    }, 5000 );
  },
 
  throw_the_cup_to_trash_can : function(){
    var self = this;
 
    setTimeout( function(){
      self.cup_noodles = self.cup_noodles === '我吃完了' ?
        '我吃完泡麵並把他丟進垃圾桶' : '泡麵浪費了'
 
      console.log( self.cup_noodles );
    }, 30 );
  }
};
