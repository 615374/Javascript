// funcion para saludar al usuario
function saludar(){
 
    const nombreUsuario = prompt(`Ingrese su nombre`);
    
    if(isNaN(nombreUsuario) && nombreUsuario.trim() !== ""){
        alert(`Hola ${nombreUsuario} bienvenido a "Mi tienda Online" `);
    } else {
        alert(`error`);
        saludar();
    }
}
saludar();


//funcion para responder si desea comprar
function responderSiDeseaComprar(){
const answer = parseInt(prompt(`Deseas realizar una compra?:
1: Si
2: No
`));
if (answer === 1) {
    alert ("Has respondido que Si");
    elegirProducto()
} else if(answer === 2) {
    alert ("Has respodido que No. Gracias por visitar Mi tienda online");
    
} else {
    alert ("error al ingresar respuesta")
    responderSiDeseaComprar();    
}
console.log(answer)
}
responderSiDeseaComprar();


//funcion para que el usuario elija el producto
function elegirProducto(){
    
    const precioRemera = 2500;
    const precioPantalon = 3800;
    const precioCampera = 4500;
    
    const option = prompt(`Elija un producto: 
    remera ${precioRemera} 
    pantalon ${precioPantalon}
    campera ${precioCampera}
    `);
    
    alert ("Has elegido: " + option)

    switch (option){
        case "remera":
            alert(`producto ${option} = $ ${precioRemera} `);
            elegirMediosDePago(precioRemera)
            break;
        case "pantalon":
            alert(`producto ${option} = $ ${precioPantalon}`);
            elegirMediosDePago(precioPantalon)
            break;
        case "campera":
            alert(`producto ${option} = $ ${precioCampera}`);
            elegirMediosDePago(precioCampera)
            break;
        default:
            alert("No ingresaste ningun producto valido");
            elegirMediosDePago();        
    } 
   
}


//funcion para que el usuario elija el medio de pago
function elegirMediosDePago(precio){ 
    let precio;
    let cuotas;
    let total = 0;
    let cant = 0;
    let formadePago = parseInt(prompt("Como desea pagar? 1- Contado 2- Credito"));
    
    if (formadePago == 1) {
        alert ("Total a pagar: $"+precio);
    } else if(formadePago == 2) {
        cuotas = parseInt(prompt("Ingrese cantidad de cuotas 6 o 12"));
        total = credito(precio, cuotas);
        //let cuota = (precio/cuotas)
        alert("Total: $"+precio+ "//" + cuotas + "cuotas de $"+(precio/cuotas));
    } else {
        alert ("error al ingresar respuesta")
        elegirMediosDePago();    
    } 
    
    //funcion para que el usuario elija cantidad de cuotas
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
                credito(precio,cuotas);        
        }
     return total;
    }
}


