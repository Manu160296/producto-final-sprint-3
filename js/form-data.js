$(document).ready(function() {
  var name = $('.name-form-js');
  var occupation = $('.occupation-form-js');
  var cellphone = $('.cellphone-js');
  var checkbox = $('.checkbox-js');
  var select = $('.select-js');

  console.log(name);
  console.log(occupation);
  console.log(cellphone);
  console.log(checkbox);
  console.log(select);

  // variables verificadoras booleanas :
  var verifyName = false;
  var verifyOccupation = false;
  var verifyCellphone = false;
  var verifyCheck = false;
  var verifySelect = false;

  // variables para localStorage:
  var tempName, tempOccupation, tempCellphone, tempSelect, tempEmail;

  // funciones que activan y descativan el boton submit :
  function activeButton() {
    if (verifyName && verifyOccupation && verifyCellphone && verifyCheck && verifySelect) {
      $('.start-js').attr('disabled', false);
    }
  }

  function desactiveButton() {
    $('.start-js').attr('disabled', 'disabled');
  }

  // agregando eventos :
  select.on('change', function() {
    if (select.val() === 'orientador' || select.val() === 'participante') {
      localStorage.ranking = select.val();
      verifySelect = true;
      activeButton();
      console.log('al fiinnn');
    } else {
      verifySelect = false;
      desactiveButton();
    }
  });


  name.on('input', function(event) {
    console.log($(this).val());
    if ($(this).val().length <= 15) {
      localStorage.name = $(this).val();
      console.log('intento');
      verifyName = true;
      activeButton();
    } else {
      verifyName = false;
      desactiveButton();
    }
  });

  occupation.on('input', function(event) {
    console.log($(this).val());
    var patternOccupation = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    console.log(patternOccupation.test($(this).val()));
    if (patternOccupation.test($(this).val())) {
      localStorage.occupation = $(this).val();
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
  $('.start-js').on('click', function() {
    window.location.href = 'profile.html';
  });
});
