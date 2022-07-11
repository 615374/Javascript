function saludar(nombre = "usuario", apellido = " "){
    alert(`Hola ${nombre} ${apellido}, bienvenido a "Mi tienda Online" `);
}

saludar();


function solicitarAnswer(){
const answer = prompt(`Deseas realizar una compra?:
1: Si
2: No
`);

if (answer == 1) {
    alert ("Has respondido que Si");

} else if(answer == 2) {
    alert ("Has respodido que No. Gracias por visitar Mi tienda online");

} else {
    alert ("error al ingresar respuesta")    
}
console.log(answer)
}

solicitarAnswer();


const option = prompt(`Elija un producto: 
remera 
pantalon 
campera 
`);

let precio1 = 2500;
let precio2 = 3800;
let precio3 = 4500;

alert ("Has elegido: " + option)

switch (option){
    case "remera":
        alert(`producto ${option} = $ ${precio1} `);
        break;
    case "pantalon":
        alert(`producto ${option} = $ ${precio2}`);
        break;
    case "campera":
        alert(`producto ${option} = $ ${precio3}`);
        break;
    default:
        alert("No ingresaste ningun producto valido");
        break;
} 

let precio = parseInt (prompt("Ingresa el precio del producto seleccionado:"));
let formadePago, cuotas;
let total = 0;
let cant = 0;

let formaPago = parseInt(prompt("Como desea pagar? 1- Contado 2- Credito"));


if (formaPago == 1) {
    alert ("Total a pagar: $"+precio);

} else if(formaPago == 2) {
    cuotas = parseInt(prompt("Ingrese cantidad de cuotas 6 o 12"));
    total = credito(precio, cuotas);
    //let cuota = (precio/cuotas)
    alert("Total: $"+precio+ "//" + cuotas + "cuotas de $"+(precio/cuotas));

} else {
    alert ("error al ingresar respuesta")    
}   

function credito(precio,cuotas){
    switch (cuotas) {
        case (6):
            total = precio * 1.2;
            break;

        case (12):
            total = precio * 1.35;
            break;
    
        default:
            alert:("error al ingresar cuotas");
            break;
    }

 return total;

}


const nombre = "Remera";
const valor = 2500;
const disponible = true;


//Object constructor

const producto = {
    nombre: "Remera",
    valor: 2500,
    disponible: true,
};

function Producto(nombre, valor){
    this.nombre = nombre;
    this.valor = valor;
    this.disponible = true;
}

const producto2= new Producto("Pantalon, 3800");
const producto3= new Producto ("Campera, 4500");

console.log(producto,producto2,producto3)

const carrito = [
    { producto: 'Remera', precio: 2500},
    { producto: 'Pantalon', precio: 3800},
    { producto: 'Campera', precio: 4500},
   
];

console.log(carrito);


