const arrayProductos=[];
const arrayCarrito =[];
const prenda= prenda


class Producto{
    constructor(nombre, precio, stock) {
        this.precio = precio;
        this.stock = stock;
        this.nombre = nombre;
    }
}
class Carrito{
  constructor(nombre, precio) {
      this.precio = precio;
      this.nombre = nombre;
  }
}

let j=0;
arrayProductos[j++]= new Producto("Remera", 2500, 5);
arrayProductos[j++]= new Producto("Pantalon", 3800, 4);
arrayProductos[j++]= new Producto("Campera", 4500, 2);


function seleccionCarrito(prenda) {
  switch (prenda) {
    case 0:
      if (arrayProductos[prenda].stock < 1) {
        alert("Remera no disponible, sin stock momentaneamente");  
      } else {
        
        agregarCarrito(arrayProductos[prenda],arrayCarrito);

        alert("Remera agregada al carrito");
        console.log("Remera agregada al carrito");
      }
      console.log(arrayCarrito);
  
    
      break;
    case 1:
      if (arrayProductos[prenda].stock < 1) {
        alert("Pantalon no disponible, sin stock momentaneamente");  
      } else {
        
        agregarCarrito(arrayProductos[prenda],arrayCarrito);
        
        alert("Pantalon agregado al carrito");
        console.log("Pantalon agregado al carrito");
      }
      console.log(arrayCarrito);
      
      break;
    case 2:
      
      if (arrayProductos[prenda].stock < 1) {
        alert("Campera no disponible, sin stock momentaneamente");  
      } else {
        
        agregarCarrito(arrayProductos[prenda],arrayCarrito);
        
        alert("Campera agregada al carrito");
        console.log("Campera agregada al carrito");
      }
      console.log(arrayCarrito);
      
      break;
    default:
        alert("error de producto")
      break;
  }
}

function agregarCarrito(objeto,arrayCarrito) {

  let n =objeto.nombre
  let p =objeto.precio;
  const a = new Carrito(n,p);
  arrayCarrito.push(a);
}

function calculaCompra(){
  let monto=0;
    for (let index = 0; index < arrayCarrito.length; index++) {
      monto+= arrayCarrito[index].precio;
    }
    return monto;
}

function finalizar() {

    console.log("Los productos del carrito son:");
    for (let index = 0; index < arrayCarrito.length; index++) {
      console.log("-"+arrayCarrito[index].nombre)
    } 
    alert(`El total de su compra es: $${(calculaCompra().toFixed(2))}`);  
}


