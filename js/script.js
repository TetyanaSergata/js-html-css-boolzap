$(document).ready(function () {
  $('.icon-sent').click(function () {
    sentMessage();
  });

  $('.message-sent').keypress(function (event) {
    if(event.which == 13) {
      sentMessage();
    }
  });
});



















// -----------FUNZIONI----------------
// Il messaggio dall'input
function sentMessage() {
  // Testo
  var message = $('input.message-sent').val();
  if (message.length != 0) {
    var newMessage = $('.template .message-box').clone();
    console.log(newMessage);
    newMessage.find('.message-text').text(message);

    // Data
    var data = new Date();
    var hour = data.getHours();
    var minute = data.getMinutes();
    var time = hour + ':' + minute;

    newMessage.find('.message-time').text(time);
    newMessage.addClass('sent');
    $('.conversation-middle').append(newMessage);
    $('input.message-sent').val('');
  }
  console.log(message);
}
