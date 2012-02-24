(function($, io) {
  
  var socket; 
  
  $(document).ready(function(){
    
    socket = io.connect('http://sharp-flower-2982.herokuapp.com/');
    //socket = io.connect('http://localhost:3000');
    
    socket.on('connect', function () {
        
        $('.status').text('Status: Connected!');
        
        $('.box').mouseover(function(){
          var txt = $(this).children().first('p').text();
          socket.emit('hover', txt);
        });
        
        socket.on('data', function(data){
          $('.results ul').append('<li>' + data + '</li>');
        });
        
    });
    
  });
  
})(jQuery, io);