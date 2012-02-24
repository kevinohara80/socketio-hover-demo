(function($, io) {
  
  var socket; 
  
  $(document).ready(function(){
    
    socket = io.connect('http://sharp-flower-2982.herokuapp.com/');
    //socket = io.connect('http://localhost:3000');
    
    socket.on('connect', function () {
      
      $('h2.status').removeClass('red').addClass('green').text('Status: Connected!');
        
      $('.box').mouseover(function(){
        $(this).addClass('green');
        var txt = $(this).children().first('p').text();
        socket.emit('hover', txt);
      }).mouseout(function(){
        $(this).removeClass('green');
      });
        
      socket.on('data', function(data){
        $('.results ul').append('<li>' + data + '</li>');
      });
        
    });
    
  });
  
})(jQuery, io);