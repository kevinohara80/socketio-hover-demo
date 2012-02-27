(function($, io) {
  
  var socket; 
  
  $(document).ready(function(){
    
    $('.results ul').append('<li> &gt; Connecting to server...</li>');
    
    socket = io.connect(window.location);
    
    socket.on('connect', function () {
        
      $('.box').mouseover(function(){
        $(this).addClass('green');
        var txt = $(this).children().first('p').text();
        socket.emit('hover', txt);
      }).mouseout(function(){
        $(this).removeClass('green');
      });
        
      socket.on('data', function(data){
        var height = $('.results ul').height();
        $('.results ul').append('<li> &gt; ' + data + '</li>');
        $('.results').scrollTop(height);
      });
        
    });
    
  });
  
})(jQuery, io);