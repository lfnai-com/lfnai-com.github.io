window.onload = function () {
		document.getElementById("servicios").onclick = function () { alertaDeAccionPendiente(); };
		Swal.fire({
	html: '<h1 style="color: #fff;">Proyecto de Informática</h1>',
	confirmButtonText: 'Continuar',
	footer: `<p style="color: #fff";>Elaborado con fines educativos</p>`,
	background: 'linear-gradient(#6aa2ff, #b5aaff)',
	
	timer: 5000,
	timerProgressBar: true,
	
	imageUrl: 'img/logo-centebad.jpg',
	imageWidth: '200px',
	imageHeight: '200px',
	imageAlt: 'logo centebad',
		});
};

function  alertaDeAccionPendiente(){
		Swal.fire({
				html: '<h1 style="color: #fff;">Gracias por elegir nuestro servicio</h1>',
	icon: 'success',
	confirmButtonText: 'Aceptar',
	footer: `<p style="color: #fff;">Funciona correctamente!</p>`,
				background: 'linear-gradient(#6aa2ff, #b5aaff)',
				
				timer: '5000',
				timerProgressBar: true,
	
				buttonsStyling: true,
				showCloseButton: true,
				closeButtonAriaLabel: 'cerrar',
		});
}




/* SWEETALERT2 */

//Swal.fire({
	// title: 
	// text:		
	// html: 
	// icon:
	// confirmButtonText: 
	// footer: 
	// width:
	// padding:
	// background: 
	// grow:
	// backdrop:
	// timer:
	// timerProgressBar:
	// toast:
	// position:
	// allowOutsideClick:
	// allowEscapeKey:
	// allowEnterKey:
	// stopKeydownPropagation:

	// input:
	// inputPlaceholder:
	// inputValue:
	// inputOptions:
	
	//  customClass:
	// 	container:
	// 	popup:
	// 	header:
	// 	title:
	// 	closeButton:
	// 	icon:
	// 	image:
	// 	content:
	// 	input:
	// 	actions:
	// 	confirmButton:
	// 	cancelButton:
	// 	footer:	

	// showConfirmButton:
	// confirmButtonColor:
	// confirmButtonAriaLabel:

	// showCancelButton:
	// cancelButtonText:
	// cancelButtonColor:
	// cancelButtonAriaLabel:
	
	// buttonsStyling:
	// showCloseButton:
	// closeButtonAriaLabel:


	// imageUrl: 
	// imageWidth: 
	// imageHeight: 
	// imageAlt: 
	//	});
