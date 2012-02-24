(function($, io) {
  
  var socket = io.connect('http://localhost:3000');
  
  socket.on('connect', function () {
      socket.on('data', function(data){
        $('.results ul').append('<li>' + data + '</li>');
      });
  });
  
  $(document).ready(function(){
    $('.box').mouseover(function(){
      var txt = $(this).children().first('p').text();
      socket.emit('hover', txt);
    });
  });
  
})(jQuery, io);