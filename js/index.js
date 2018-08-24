let color = "#000000";
let tamano= 10;
let pintura = false;

// Funcion de pintar
const pintar = (event) =>{
	let canvas = document.getElementById("canvas"); // Lllamo a mi elemto canvas
	let ctx = canvas.getContext("2d");  // Metodo que hace un lienzo de dibujo mientras 2d especifica que sera de dos dimensiones (Sitio donde dibujamos)
	let x = event.clientX-10; // evente obtiene la informacion asociada
	let y = event.clientY+15; // Posicion del mouse para saber donde iremos pintando 
	if(pintura){ // Condiciona a que pintura es cierto ejecuta lo siguiente
		ctx.fillStyle = color; // Propiedad el CANVAS que especifica el color para usar adentro
		ctx.fillRect(x,y,tamano, tamano); // Se encarga de hacer un cuadrado pequeño en cada posicion del mouse
	}
}
 // Funcion activar convierte la variable boleana
const activar = () => {
	pintura = true;
}
// Funcion desactivar vuelve al valor inical boleano
const desactivar = () => {
	pintura = false;
}
	
const borrador = () => {
	document.getElementById("canvas").style.cursor ="url('../img/goma.gif'), default" ;
	color = "#FFFFFF"; // Accedo al canvas y doy estilo al cursor para no perderlo
	document.getElementById("colores").setAttribute("disabled", ""); // Agrego atributo para que no aplique el valor del input color cuando quiero borrar
}
	
const lapiz = () => {
	document.getElementById("canvas").style.cursor = "url('../img/lapiz.gif'), default";
	color = document.getElementById("colores").value; // Llamo el valor del color
    document.getElementById("colores").removeAttribute("disabled");	// Elimino el atributo para que pueda pintar nuestro lapiz del color que sea
}
// Funcion para agarrar el valor del input con el onchange
const scolor = () => {
	color = document.getElementById("colores").value;
}
// Funcion para el tamaño del lapiz
const stamano = (numero) => {
	tamano = numero; // Tamaño sera igual al numero correspondiente en htm
}
	
const guardari = () => {
	let canvas = document.getElementById("canvas"); // Acedo al canvas
	let imagen = canvas.toDataURL("image/jpg"); // toDataURL Permite transformar el canvas en una imagen
	this.href = imagen; // Modifica el valor de referencia en el html
}
document.getElementById("guardarimagen").addEventListener("click", guardari (), false);