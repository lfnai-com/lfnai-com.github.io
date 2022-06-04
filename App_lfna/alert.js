window.onload = function (){
			document.getElementById("btnenv").onclick = function () { alertE(); };
			
			setTimeout(function(){
							alert1();
			}, 1000);
			setTimeout(function(){
							alert2();
			}, 5000);
			setTimeout(function(){
							alert3();
			}, 20000);			
};



function alertE(){
Swal.fire({
	title: 'Error',
	text: 'Datos incorrectos, verifique el usuario-correo o la contraseña',
	icon: 'error',
  confirmButtonText: 'Aceptar',
 footer: '<a style="color: #007aff;" href="https://lfnai.com/registro/JIMOELMYS8"><u>Registrarme ahora</u></a>',
	timer: 8000,
	timerProgressBar: true,
	allowEscapeKey: false,
	stopKeydownPropagation: false,
	confirmButtonColor: '#3085d6',
});
};


function alert1() {
				Swal.fire({
	title: 'Bienvenido 😎🤙',
	icon: 'info',
	timer: 4000,
	timerProgressBar: true,
	toast: true,
	position: 'top',
	allowEscapeKey: false,
	stopKeydownPropagation: true,
	showConfirmButton: false,
});
};


function alert2() {
				Swal.fire({
	title: 'Inicia Sesión para continuar 👍',
	icon: 'info',
	timer: 5000,
	timerProgressBar: true,
	toast: true,
	position: 'top',
	allowEscapeKey: false,
	stopKeydownPropagation: true,
	showConfirmButton: false,
});
};

function alert3() {
				Swal.fire({
	title: '¿Necesitas ayuda?',
	text: 'Consulta en nuestro chat 💬',
	icon: 'question',
	timer: 8000,
	timerProgressBar: true,
	toast: true,
	position: 'top',
	allowEscapeKey: false,
	stopKeydownPropagation: true,
	showConfirmButton: false,
});
};
