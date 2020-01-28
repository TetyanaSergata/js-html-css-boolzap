$(document).ready(function () {
  $('.icon-box').click(function () {
    sentMessage();
  });
});

$('.message-sent').keypress(function (event) {
  if(event.which == 13) {
    sentMessage();
  }
});


















// -----------FUNZIONI----------------
// Il messaggio dall'input
function sentMessage() {
  // Testo
  var message = $('input.message-sent').val();
  if (message.length != 0) {
    var newMessage = $('.template .message-box').clone();
    console.log(newMessage);
    newMessage.find('.message-text').text(newMessage);
    // Data
    
  }
  console.log(message);
}
