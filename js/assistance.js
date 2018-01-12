$(document).ready(function () {
	var medicalHelp = $('.medical-help-js');
	var juridicalHelp = $('.juridical-help-js');
	var psychologicalHelp = $('.psychological-help-js');

	var objAssistance = {
		firstAssistence: 'psicológica',
		secondAssistence: 'jurídica',
		thirdAssistence: 'médica',
	}

	//obteniendo array con las key del objeto:
	$.each(assistance, function (index) {
		//	var tag = '<div class="box-shadow commit--styles margin-15 padding-10 font-weight-600"><p>CENTRO :' + assistance[index].name + '</p><p>TELEFONO:' + assistance[index].phoneNumber + '</p><p>DIRECCION:' + assistance[index].address + '</p><p>SITIO WEB:' + assistance[index].ref + '</p></div>'

		var tag = '<div class="box-shadow commit--styles margin-15 padding-10 font-weight-600 row"><div class="col-xs-12 col-sm-7"><p>CENTRO :' + assistance[index].name + '</p><p>TELEFONO:' + assistance[index].phoneNumber + '</p><p>DIRECCION:' + assistance[index].address + '</p><p>SITIO WEB:' + assistance[index].ref + '</p></div><div class="col-xs-12 col-sm-5 border-white"><img src="' + assistance[index].image + '" alt="" class="img-size pull-right"></div></div>';

		if (assistance[index].type === objAssistance.firstAssistence) {
			psychologicalHelp.append(tag);
		} else if (assistance[index].type === objAssistance.secondAssistence) {
			juridicalHelp.append(tag);
		} else if (assistance[index].type === objAssistance.thirdAssistence) {
			medicalHelp.append(tag);
		}
	})

	//boton queretorna a la vista anterior:
	var buttonReturn = $('.return-js');
	buttonReturn.on('click', function () {
		window.location.href = 'profile.html';
	})

	//boton que cierra sesion:
	var signOut = $('.sign-out-js');
	signOut.on('click', function () {
		window.location.href = 'home.html';
	})


});