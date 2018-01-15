$(document).ready(function() {
  $('select').material_select();
  var occupation = $('.occupation-form-js');
  var nickname = $('.nickname-js');
  var cellphone = $('.cellphone-js');
  var checkbox = $('.checkbox-js');

  //  $('.start-js').removeClass('disabled');

  console.log(nickname);
  console.log(cellphone);
  console.log(checkbox);
  console.log(occupation);

  // variables verificadoras booleanas :

  var verifyNickname = false;
  var verifyOccupation = false;
  var verifyCellphone = false;
  var verifyCheck = false;

  // funciones que activan y descativan el boton submit :
  function activeButton() {
    if (verifyNickname && verifyOccupation && verifyCellphone && verifyCheck) {
      $('.start-button-js').removeClass('disabled');
    }
  }

  function desactiveButton() {
    // $('.start-js').attr('disabled', 'disabled');
    $('.start-button-js').addClass('disabled');
  }

  // agregando eventos :

  nickname.on('input', function(event) {
    console.log($(this).val());
    if ($(this).val().length <= 15) {
      localStorage.nickname = $(this).val();
      console.log('intento');
      verifyNickname = true;
      activeButton();
    } else {
      verifyNickname = false;
      console.log('pasa numero de caracteres permitidos');
      desactiveButton();
    }
  });

  occupation.on('input', function(event) {
    console.log($(this).val());
    var patternOccupation = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    console.log(patternOccupation.test($(this).val()));
    if (patternOccupation.test($(this).val())) {
      localStorage.occupation = $(this).val();
      console.log($(this).val());
      verifyOccupation = true;
      activeButton();
    } else {
      verifyOccupation = false;
      desactiveButton();
    }
  });

  cellphone.on('input', function(event) {
    if ($(this).val().length === 9) {
      localStorage.cellphone = $(this).val();
      console.log('siiii');
      verifyCellphone = true;
      activeButton();
    } else {
      verifyCellphone = false;
      desactiveButton();
    }
  });

  checkbox.on('click', function(event) {
    if (event.target.checked) {
      console.log('check');
      verifyCheck = true;
      activeButton();
    } else {
      verifyCheck = false;
      desactiveButton();
    }
  });


  $('.start-button-js').on('click', function(event) {
    event.preventDefault();
    console.log('falta el redireccionamiento!!!');
    window.location.href = 'home.html';
  });
});
