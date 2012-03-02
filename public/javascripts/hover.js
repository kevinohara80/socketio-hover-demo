(function($) {
  
  var socket; 
  
  var consoleWrite = function(msg) {
    var height = $('.results ul').height();
    $('.results ul').append('<li> &gt; ' + msg + '</li>');
    $('.results').scrollTop(height);
  }
  
  $(document).ready(function(){
    
    $('.results ul').append('<li> &gt; Connecting to server...</li>');
    
    socket = io.connect(window.location);
    
    socket.on('connnecting', function(transport) {
      consoleWrite('Trying transport: ' + transport);
    });
    
    socket.on('connect', function () {
      $('.box').mouseover(function(){
        $(this).addClass('green');
        var txt = $(this).children().first('p').text();
        socket.emit('hover', txt);
      }).mouseout(function(){
        $(this).removeClass('green');
      });   
    });
    
    socket.on('data', function(data){
      consoleWrite(data);
    });
    
    socket.on('disconnect', function(){
      consoleWrite('Disconnected from the server!');
    });
    
    socket.on('connect_failed', function(){
      consoleWrite('Connection to the server failed!');
    });
    
  });
  
})(jQuery);