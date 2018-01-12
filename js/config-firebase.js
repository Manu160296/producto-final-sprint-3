/* // Initialize Firebase
var config = {
  apiKey: 'AIzaSyB4r_l0nZqI3vih0e2oz8LdKn--ixfosIs',
  authDomain: 'sprint-3-d98bc.firebaseapp.com',
  databaseURL: 'https://sprint-3-d98bc.firebaseio.com',
  projectId: 'sprint-3-d98bc',
  storageBucket: 'sprint-3-d98bc.appspot.com',
  messagingSenderId: '815238332968'
};
firebase.initializeApp(config);
// google login :
var user = null;
var $loginBtn = $('#start-login');
$loginBtn.on('click', googleLogin);

function googleLogin() {
  var provider = new firebase.auth.GoogleAuthProvider();
  // doc de firebase:
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      // guardamos el usuario que nos trae result:
      user = result.user;
      // mostramos su contenido:
      console.log(user);
      // ocultamos el div login
      $('#login').fadeOut();
    });
}

// email login :

var register = $('#register');
register.on('click', function(event) {
  console.log(register);
  var email = $('#email').val();
  localStorage.email = email;
  var password = $('#password').val();
  console.log(email);
  console.log(password);
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ...
  });
});

var clear = $('.clear-js');
clear.on('click', function() {
  console.log('dddvdfgdf');
  firebase.auth().signOut()
    .then(function() {
      console.log('saliendo...');
    })

    .catch(function(error) {
      console.log(error);
    });
//  window.location.href = 'form-data.html';
});

var signIn = $('.signIn-js');


signIn.on('click', function() {
  console.log(signIn);
  var userEmail = $('#user-email').val();
  localStorage.email = userEmail;
  var userPassword = $('#user-password').val();
  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ...
  });
});

function viewer() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // showContent();
      // close();
      console.log('existe usuario activo');
      //  window.location.href = 'views/profile.html';
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log('no existe usuario activo');
      // ...
    }
  });
}

viewer();

function close() {
  var content = $('#content');
  content.append('<p>¿Lista para la segunda parte?</p><button id="continue">Continuar</button>');

  var userContinue = $('#continue');
  userContinue.on('click', function() {
    firebase.auth().signOut()
      .then(function() {
        console.log('saliendo...');
      })

      .catch(function(error) {
        console.log(error);
      });
    console.log('aaaaaaaaa');
  //  window.location.href = 'form-data.html';
  });
}

function clear() {
  firebase.auth().signOut()
    .then(function() {
      console.log('saliendo...');
    })

    .catch(function(error) {
      console.log(error);
    });
  console.log('aaaaaaaaa');
//  window.location.href = 'form-data.html';
}
*/

$(document).ready(function () {
  var email = $('#email');
  var password = $('#password');
  var confirmPassword = $('#confirm-password');

  var validateEmail = false;
  var validatePassword = false;
  var confirm = false;
  // funciones que activan y desactivan el boton submmit :

  function activeButton() {
    if (validateEmail && validatePassword && confirm) {
      $('#register').attr('disabled', false);
    }
  }

  function desactiveButton() {
    $('#register').attr('disabled', 'disabled');
  }

  email.on('input', function (event) {
    // console.log(event.target.value);
    var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log(REGEXEMAIL.test($(this).val()));
    console.log($(this).val());
    if (REGEXEMAIL.test($(this).val())) {
      validateEmail = true;
      activeButton();
    } else {
      validateEmail = false;
      desactiveButton();
    }
  });

  password.on('input', function () {
    console.log($(this).val());
    if ($(this).val().length >= 6) {
      validatePassword = true;
      activeButton();
    } else {
      validatePassword = false;
      desactiveButton();
    }
  });

  confirmPassword.on('input', function () {
    if ($(this).val() === password.val()) {
      confirm = true;
      activeButton();
    } else {
      confirm = false;
      desactiveButton();
    }
  });

  $('#register').on('click', function () {
    event.preventDefault();
    localStorage.email = email.val();
    localStorage.password = password.val();
  });

  var start = $('.start-js');
  var emailUser = $('#user-email');
  var passwordUser = $('#user-password');
  var validateEmailUser = false;
  var validatePasswordUser = false;
  emailUser.on('input', function () {
    if ($(this).val() === localStorage.email) {
      // alert('pasa');
      validateEmail = true;
    }
  });

  passwordUser.on('input', function () {
    if ($(this).val() === localStorage.password) {
      // alert('esto tambien pasa');
      validatePassword = true;
    }
  });

  start.on('click', function (event) {
    event.preventDefault();
    if (validateEmail && validatePassword) {
      $('#start-js').attr('disabled', false);
      window.location.href = 'form-data.html';
    } else {
      alert('You need register :( ');
    }
  });
});
