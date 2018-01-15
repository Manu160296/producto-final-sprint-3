// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBpss4wXn8LAJODAjI1bdrB1pCptLCyN4A',
  authDomain: 'social-network-3002b.firebaseapp.com',
  databaseURL: 'https://social-network-3002b.firebaseio.com',
  projectId: 'social-network-3002b',
  storageBucket: 'social-network-3002b.appspot.com',
  messagingSenderId: '57077219163'
};
firebase.initializeApp(config);

var user = null;
var usuariosConectados = null;
// conexion a la base de datos :
var database = firebase.database();
// llave unica por usuario-conexion:
var conectadoKey = '';

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
	  	initApp();
	  	window.location.href = 'home.html';

	  	// ocultamos el div login
	  	//  $('#login').fadeOut();
  	});
}

function initApp() {
  // referencia a una tabla en base de datos :
  usuariosConectados = database.ref('/connected');

  // 2 parametros , el 2do si no tiene displayName name toma el email:

  login(user.uid, user.displayName || user.email);
}

function login(uid, name) {
  // se crea un objeto en la base de datos y se guarda la referencia:
  var conectado = usuariosConectados.push({
  	uid: uid,
  	name: name
  });
  // identificador unico del reistro:
  conectadoKey = conectado.key;
}

var logOut = $('.log-out-js');
logOut.on('click', signOut);
function signOut() {
  firebase.auth().onAuthStateChanged(function(user) {
  	database.ref('/conected/' + user.uid).remove();
  	// window.location.href = 'login.html'
  	window.location.href = 'form.html';
  });
}
