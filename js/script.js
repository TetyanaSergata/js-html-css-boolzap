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
    var hour = addZero(data.getHours());
    var minute = addZero(data.getMinutes());
    var time = hour + ':' + minute;
    newMessage.find('.message-time').text(time);

    newMessage.addClass('sent');
    $('.conversation-middle.active').append(newMessage);
    setTimeout(sentAnswer, 1000);
    $('input.message-sent').val('');
  }
  console.log(message);
}

// Funzione per l'ora completa
function addZero(number) {
  if(number < 10) {
    number += '0';
  }
  return number;
}

// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

function sentAnswer() {
  var autoAnswer = $('.template .message-box').clone();
  autoAnswer.find('.message-text').text('ok');
  // Data
  var data = new Date();
  var hour = data.getHours();
  var minute = data.getMinutes();
  var time = hour + ':' + minute;
  autoAnswer.find('.message-time').text(time);

  autoAnswer.addClass('received');
  $('.conversation-middle.active').append(autoAnswer);
}
