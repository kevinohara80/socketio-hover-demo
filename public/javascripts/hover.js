(function($, io) {
  
  var socket = io.connect('http://sharp-flower-2982.herokuapp.com/');
  
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