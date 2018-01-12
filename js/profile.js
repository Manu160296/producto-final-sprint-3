$(document).ready(function() {
  $('.name-js').text('Name : ' + localStorage.name);
  $('.occupation-js').text('Ocupación : ' + localStorage.occupation);
  $('.cellphone-js').text('Celular : ' + localStorage.cellphone);
  $('.ranking-js').text('Ranking : ' + localStorage.ranking);
  $('.email-js').text('Email : ' + localStorage.email);

  var startCommit = $('.start-commit-js');
  startCommit.on('click', function() {
    window.location.href = 'main.html';

  });
  var search = $('.search-js');
  console.log(search)
  search.on('click', function(){
    window.location.href = 'assistance.html';
  });
  
  var friends = $('.friends-js');
  friends.on('click', function()  {
    window.location.href= 'search.html'
  })
  
  var buttonOut =  $('.sign-out-js');
	buttonOut.on('click', function () {
		window.location.href = 'home.html';
	
  })

});
