$(document).ready(function() {
  $('.button-collapse').sideNav();
  $('.nickname-js').text('Nickname : ' + localStorage.nickname);
  $('.occupation-js').text('Ocupación : ' + localStorage.occupation);
  $('.cellphone-js').text('Celular : ' + localStorage.cellphone);

  $('.contacts-js').on('click', function(event) {
    event.preventDefault();
    window.location.href = 'contacs.html';
  });
});
