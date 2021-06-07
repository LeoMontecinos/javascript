const baseProductos = [];

let carrito = [];

function MostrarMsj(){
let storageValues = localStorage.carrito;
console.log(storageValues);
if(storageValues == null){
 alert("No hay datos para tu carrito");   
}else{
 const carrito = [...JSON.parse(storageValues)];
}
}

/* Modificar prompt por un DOM */
function MostrarAlert() {
    alert("Eres menor de edad, debes inscribir los cursos acompañado de un adulto");
 }
 
 let tuEdad = Number(prompt("Indica tu edad"))
 if (tuEdad >= 18){
     document.write("Eres mayor de edad, puedes inscribirte a los cursos");
     document.write("<br>");
 } else{
     MostrarAlert();
 }

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

let productoUno = new Producto('Taller Canto', 30000)
let productoDos = new Producto('Taller Piano', 40000)
baseProductos.push(productoUno);
baseProductos.push(productoDos);

/**
 * 
 * @param {numero} precio 
 */

function agregarAlCarrito(precio) {
 carrito.push(precio);
 localStorage.setItem("carrito", JSON.stringify(carrito));
 console.log(carrito.sort());
 console.log('Tienes ${carrito.length} productos en tu carrito');
 document.getElementById('mensajes').innerHTML = 'Se agrego al carrito';
}


function validaNombre(){

const ArrayDeElementosDiv = document.getElementsByTagName("div");

for(let i = 0; i < ArrayDeElementosDiv.length; i++){
    console.log(ArrayDeElementosDiv[i].style.background = "red");
    console.log(ArrayDeElementosDiv[i].style.color = "blue");
}
}


document.getElementById('nombre').value

function alertaParaCambios(event){
    console.log(event.target.value);
    alert ("Cambiaste el imput");
}

let primerJSON = {nombre: "Talleres", apellido: "musicales"};
console.log(primerJSON);

$("#msj").click(function () {
    $(this).css({ color: "red", background: "red"});
    alert("estas cargando al carrito");
    $("#msj").html(`<h2 id='prueba'> Se agrego al carrito </h2>`);
    $("#prueba").hide();
    $("#prueba").fadeIn(4000, function(){
        $("#prueba").hide()
    });
});

$("div").on("click", function () {});

$("#mover").click(function(){
    $("#nuevo").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    });
}); 

function llamarDatos(){
    $.get('https://api.whatsapp.com/send/?phone=56945743105&text&app_absent=0',
    function (data, status) {
        console.log(status);
        console.log(data);
    }
    );
}
