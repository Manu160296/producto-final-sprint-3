$(document).ready(function () {
	var contacts = $('.contacts-js');

	$.each(users, function (index) {
		var tag = '<div class="box-shadow commit--styles margin-15 padding-10 font-weight-600 row"><div class="col-xs-12 col-sm-7"><p>NICKNAME :' + users[index].nickname + '</p><p>EMAIL:' + users[index].email + '</p><p>RANKING:' + users[index].ranking + '</p><p>SITIO WEB:' + users[index].cellphone + '</p></div><div class="col-xs-12 col-sm-5 border-white"><img src="' + users[index].photo + '" alt="" class="img-size pull-right"></div></div>';
		contacts.append(tag);
	})
	//redireccionando a la vista anterior:
	var viewReturn = $('.return-js');
	viewReturn.on('click', function () {
		window.location.href = 'profile.html'
	})
	//boton que cierra sesion :
	var signOut = $('.sign-out-js');
	signOut.on('click', function () {
		window.location.href = 'home.html';
	})

});