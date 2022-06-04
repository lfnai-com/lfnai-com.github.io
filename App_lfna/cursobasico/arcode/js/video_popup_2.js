window.onload = function (){
			document.getElementById("video_popup").onclick = function () {video_popup();};
};


function video_popup() {
Swal.fire({
title: 'Conociendo el Sistema',

html: `
<style>
		iframe {
				box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
		}
		.texto-menu {
				font-size: 17px;
				margin-bottom: 0px;
				color: #777;
		}
		.contenedor {
				
				background: lightblue;
				margin-left: auto;
				margin-right: auto;
				width: 300px;
				position: relative;
		}
		.opcion {
				width: 222px;
				top: 2px;
				left: 0px;
				position: absolute;
				text-align: left;
				border: 2px solid #dcdcdc;
				background: #f2f2f2;
				border-radius: 8px;
				padding: 3.5px;
				margin: 3.5px 1px;
				color: #777;
		}
		.opcion:hover {
				background: #606060;
				color: #fff;
		}
		.tiempo {
				width: 45px;
				top: 2px;
				right: 28px;
				position: absolute;
				border: 1px solid #efefef;
				background: #eee;
				border-radius: 8px;
				padding: 3.5px;
				margin: 3.5px 1px;
				color: #999;
		}
		.compartir {
				width: 25px;
				right: 0px;
				position: absolute;
				border: 2px solid #dcdcdc;
				background: #f2f2f2;
				border-radius: 8px;
				padding: 3.5px;
				margin: 3.5px 1px;
				color: #777;
		}
		.compartir:hover {
				background: #606060;
				color: #fff;
		}
		.link, .numero, .compartir-enlace {
				text-decoration: none;
		}
</style>
<iframe id="iframe" name="iframevideopopup" width="" height="170" src="https://www.youtube.com/embed/?start=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></br>
<p class="texto-menu">- - - <b>Marcas de tiempo</b> - - -</p>
<div class="contenedor">
		<small>
				<a class="link opcion" href="#" target="iframevideopopup">texto</a>
				<a class="tiempo numero">00:00</a>
				<a class="compartir compartir-enlace" href="http://wa.me/+5930963287989?text=Hola%20[nombre]👋%0A%0ASobre%20el%20tema,%20tengo%20algo%20para%20que%20puedas%20entender%20mucho%20mejor:%20¿Comohacerquetalcosasuceda?%0A%0AObserva%20este%20breve%20video:%0AENLACE%0A%0ASerá%20claro,%20fácil%20y%20sencillo%20de%20entender%20😉👌%0A%0ACuéntame:%20¿Te%20resultó%20útil%20este%20video?%20¿Tienes%20alguna%20pregunta%20adicional?%20" target="_blank">➦</a>
		</small>	
</div>
</br>
</br>
<div class="contenedor">
		<small>
				<a class="link opcion" href="#" target="iframevideopopup">texto</a>
				<a class="tiempo numero">00:00</a>
				<a class="compartir compartir-enlace" href="http://wa.me/+5930963287989?text=Hola%20[nombre]👋%0A%0ASobre%20el%20tema,%20tengo%20algo%20para%20que%20puedas%20entender%20mucho%20mejor:%20¿Comohacerquetalcosasuceda?%0A%0AObserva%20este%20breve%20video:%0AENLACE%0A%0ASerá%20claro,%20fácil%20y%20sencillo%20de%20entender%20😉👌%0A%0ACuéntame:%20¿Te%20resultó%20útil%20este%20video?%20¿Tienes%20alguna%20pregunta%20adicional?%20" target="_blank">➦</a>
		</small>	
</div>
</br>
</br>
<div class="contenedor">
		<small>
				<a class="link opcion" href="#" target="iframevideopopup">texto</a>
				<a class="tiempo numero">00:00</a>
				<a class="compartir compartir-enlace" href="http://wa.me/+5930963287989?text=Hola%20[nombre]👋%0A%0ASobre%20el%20tema,%20tengo%20algo%20para%20que%20puedas%20entender%20mucho%20mejor:%20¿Comohacerquetalcosasuceda?%0A%0AObserva%20este%20breve%20video:%0AENLACE%0A%0ASerá%20claro,%20fácil%20y%20sencillo%20de%20entender%20😉👌%0A%0ACuéntame:%20¿Te%20resultó%20útil%20este%20video?%20¿Tienes%20alguna%20pregunta%20adicional?%20" target="_blank">➦</a>
		</small>	
</div>
</br>
</br>
<div class="contenedor">
		<small>
				<a class="link opcion" href="#" target="iframevideopopup">texto</a>
				<a class="tiempo numero">00:00</a>
				<a class="compartir compartir-enlace" href="http://wa.me/+5930963287989?text=Hola%20[nombre]👋%0A%0ASobre%20el%20tema,%20tengo%20algo%20para%20que%20puedas%20entender%20mucho%20mejor:%20¿Comohacerquetalcosasuceda?%0A%0AObserva%20este%20breve%20video:%0AENLACE%0A%0ASerá%20claro,%20fácil%20y%20sencillo%20de%20entender%20😉👌%0A%0ACuéntame:%20¿Te%20resultó%20útil%20este%20video?%20¿Tienes%20alguna%20pregunta%20adicional?%20" target="_blank">➦</a>
		</small>	
</div>
</br>
</br>
<div class="contenedor">
		<small>
				<a class="link opcion" href="#" target="iframevideopopup">texto</a>
				<a class="tiempo numero">00:00</a>
				<a class="compartir compartir-enlace" href="http://wa.me/+5930963287989?text=Hola%20[nombre]👋%0A%0ASobre%20el%20tema,%20tengo%20algo%20para%20que%20puedas%20entender%20mucho%20mejor:%20¿Comohacerquetalcosasuceda?%0A%0AObserva%20este%20breve%20video:%0AENLACE%0A%0ASerá%20claro,%20fácil%20y%20sencillo%20de%20entender%20😉👌%0A%0ACuéntame:%20¿Te%20resultó%20útil%20este%20video?%20¿Tienes%20alguna%20pregunta%20adicional?%20" target="_blank">➦</a>
		</small>	
</div>
</br>
</br>
<div class="contenedor">
		<small>
				<a class="link opcion" href="#" target="iframevideopopup">texto</a>
				<a class="tiempo numero">00:00</a>
				<a class="compartir compartir-enlace" href="http://wa.me/+5930963287989?text=Hola%20[nombre]👋%0A%0ASobre%20el%20tema,%20tengo%20algo%20para%20que%20puedas%20entender%20mucho%20mejor:%20¿Comohacerquetalcosasuceda?%0A%0AObserva%20este%20breve%20video:%0AENLACE%0A%0ASerá%20claro,%20fácil%20y%20sencillo%20de%20entender%20😉👌%0A%0ACuéntame:%20¿Te%20resultó%20útil%20este%20video?%20¿Tienes%20alguna%20pregunta%20adicional?%20" target="_blank">➦</a>
		</small>	
</div>
</br>
</br>
<div class="contenedor">
		<small>
				<a class="link opcion" href="#" target="iframevideopopup">texto</a>
				<a class="tiempo numero">00:00</a>
				<a class="compartir compartir-enlace" href="http://wa.me/+5930963287989?text=Hola%20[nombre]👋%0A%0ASobre%20el%20tema,%20tengo%20algo%20para%20que%20puedas%20entender%20mucho%20mejor:%20¿Comohacerquetalcosasuceda?%0A%0AObserva%20este%20breve%20video:%0AENLACE%0A%0ASerá%20claro,%20fácil%20y%20sencillo%20de%20entender%20😉👌%0A%0ACuéntame:%20¿Te%20resultó%20útil%20este%20video?%20¿Tienes%20alguna%20pregunta%20adicional?%20" target="_blank">➦</a>
		</small>	
</div>
</br>
</br>
<div class="contenedor">
		<small>
				<a class="link opcion" href="#" target="iframevideopopup">texto</a>
				<a class="tiempo numero">00:00</a>
				<a class="compartir compartir-enlace" href="http://wa.me/+5930963287989?text=Hola%20[nombre]👋%0A%0ASobre%20el%20tema,%20tengo%20algo%20para%20que%20puedas%20entender%20mucho%20mejor:%20¿Comohacerquetalcosasuceda?%0A%0AObserva%20este%20breve%20video:%0AENLACE%0A%0ASerá%20claro,%20fácil%20y%20sencillo%20de%20entender%20😉👌%0A%0ACuéntame:%20¿Te%20resultó%20útil%20este%20video?%20¿Tienes%20alguna%20pregunta%20adicional?%20" target="_blank">➦</a>
		</small>	
</div>
</br>
</br>
<div class="contenedor">
		<small>
				<a class="link opcion" href="#" target="iframevideopopup">texto</a>
				<a class="tiempo numero">00:00</a>
				<a class="compartir compartir-enlace" href="http://wa.me/+5930963287989?text=Hola%20[nombre]👋%0A%0ASobre%20el%20tema,%20tengo%20algo%20para%20que%20puedas%20entender%20mucho%20mejor:%20¿Comohacerquetalcosasuceda?%0A%0AObserva%20este%20breve%20video:%0AENLACE%0A%0ASerá%20claro,%20fácil%20y%20sencillo%20de%20entender%20😉👌%0A%0ACuéntame:%20¿Te%20resultó%20útil%20este%20video?%20¿Tienes%20alguna%20pregunta%20adicional?%20" target="_blank">➦</a>
		</small>	
</div>
</br>
</br>
<div class="contenedor">
		<small>
				<a class="link opcion" href="#" target="iframevideopopup">texto</a>
				<a class="tiempo numero">00:00</a>
				<a class="compartir compartir-enlace" href="http://wa.me/+5930963287989?text=Hola%20[nombre]👋%0A%0ASobre%20el%20tema,%20tengo%20algo%20para%20que%20puedas%20entender%20mucho%20mejor:%20¿Comohacerquetalcosasuceda?%0A%0AObserva%20este%20breve%20video:%0AENLACE%0A%0ASerá%20claro,%20fácil%20y%20sencillo%20de%20entender%20😉👌%0A%0ACuéntame:%20¿Te%20resultó%20útil%20este%20video?%20¿Tienes%20alguna%20pregunta%20adicional?%20" target="_blank">➦</a>
		</small>	
</div>

`,

footer: `
<style>
		.pantalla-completa, .retroceder, .continuar {
				text-align: center;
				border: 2px solid #dcdcdc;
				background: #f2f2f2;
				color: #777;
				padding: 4px;
				width: 300px;
				border-radius: 8px;
				text-decoration: none;
				margin: 0px 5px;
		}
		.pantalla-completa:hover,
		.retroceder:hover,
		.continuar:hover {
				background: #dbdbdb;
				border: 2px solid #eee;
		}
</style>
<small>
		<a class="retroceder" onclick="" href="#">《《《</a>
		<a class="pantalla-completa" href="#">Abrir video en pantalla completa</a>
		<a class="continuar" onclick="" href="#">》》》</a>
</small>
`,

grow: 'fullscreen',
background: '',
backdrop: true,
showCloseButton: true,
allowOutsideClick: false,
allowEscapeKey: false,
allowEnterKey: false,
stopKeydownPropagation: false,
showConfirmButton: false,
showCancelButton: false,
});
};
