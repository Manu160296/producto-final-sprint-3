$(document).ready(function() {
  $('.nickname-js').text('Nickname : ' + localStorage.nickname);
  $('.occupation-js').text('Ocupación : ' + localStorage.occupation);
  $('.cellphone-js').text('Celular : ' + localStorage.cellphone);
  var contacts = $('.contacts-box-js');

  $.each(users, function(index) {
    var tag = '<div class="row commits--styles  border-radius-10 padding-15px"><div class="col s7 "><p>Nickname:' + users[index].nickname + '</p><p>Celular:' + users[index].cellphone + '</p><p>Email:' + users[index].email + '</p></div><div class="col s4 "><img src="' + users[index].photo + '" alt="imagen usuario" class="img-user-size right margin-top-10"></div></div>';
    contacts.append(tag);
  }); 
});
