$(document).ready(function () {
  

  // ingreso de estado
  var msjIntro = $('#exampleTextarea');
  var button = $('.button-msj0');

  button.on('click', function () {
    if (msjIntro.val()) {
      // alert('Hola'); alert de comprobacion

      $('.estadox').append('<div class=new-feel>' + 'Hoy me siento '+ msjIntro.val() + '</div>');

      msjIntro.val('');
    };
  });

  // ingreso de imagenes
  $('#preview').hover(
    function() {
        $(this).find('a').fadeIn();
    }, function() {
        $(this).find('a').fadeOut();
    }
)
$('#file-select').on('click', function(e) {
     e.preventDefault();
    
    $('#file').click();
})

$('input[type=file]').change(function() {
    var file = (this.files[0].name).toString();
    var reader = new FileReader();
    
    $('#file-info').text('');
    $('#file-info').text(file);
    
    reader.onload = function (e) {
      $('#preview img').attr('src', e.target.result);
	 };
     
    reader.readAsDataURL(this.files[0]);
});

// ingreso de mensajes
var newmsj = $('.msj-msj');
var btnsmj =$('#msj0');

button.on('click', function () {
  if (newmsj.val()) {
    // alert('Hola'); alert de comprobacion

    $('.estadox').append('<div class=new-coment>' + msjIntro.val() + '</div>');

    msjIntro.val('');
  };


});