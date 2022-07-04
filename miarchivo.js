let answer = prompt(`Deseas realizar una compra?:

1: Si
2: No

`);

alert ("Has respondido que: " + answer)


let option = prompt(`Elija un producto:
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
        prompt(`producto ${option} = $ ${precio1} `);
        break;
    case "pantalon":
        prompt(`producto ${option}, = $ ${precio2}`);
        break;
    case "campera":
        prompt(`producto ${option}, = $ ${precio3}`);
        break;
    default:
        prompt("No ingresaste ningun producto");
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



