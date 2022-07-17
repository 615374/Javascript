let arrayProducts = []
let arrayCarts = []
let cantidadDeProductos = arrayProducts.length
let divProductos = document.getElementById("div-productos")

class Product {
    constructor(name, price, stock) {
        this.name = name
        this.price = price
        this.stock = stock
    }
}

class ToCart {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

let product1 = new Product("remera", 2500, 15)
let product2 = new Product("pantalon", 3800, 8)
let product3 = new Product("campera", 4500, 7)


function crearProductos() {
    arrayProducts.push(product1)
    arrayProducts.push(product2)
    arrayProducts.push(product3)
    console.log(arrayProducts);
}

crearProductos()

for (let index = 0; index < arrayProducts.length; index++) {
    console.log(arrayProducts[index].name, arrayProducts[index].price, arrayProducts[index].stock)
}


function añadirAlCarrito(prenda, cantidad) {
    let indexProduct = arrayProducts.findIndex(object => {
        return object.name === prenda;
    })
    let producto = arrayProducts[indexProduct].name
    let precio = arrayProducts[indexProduct].price * cantidad
    let productToAdd = new ToCart(producto, precio)
    switch (prenda) {
        case "remera":
            if (cantidad > arrayProducts[indexProduct].stock) {
                console.log("stock de remeras insuficiente")
            } else {
                
                arrayCarts.push(productToAdd)
                console.log(`añadiste ${cantidad} remeras al carrito`)
            }
            break;

        case "pantalon":

            if (cantidad > arrayProducts[indexProduct].stock) {
                console.log("stock de pantalones insuficiente")
            } else {
                arrayCarts.push(productToAdd)
                console.log(`añadiste ${cantidad} pantalon al carrito`)
            }
            break;

        case "campera":

            if (cantidad > arrayProducts[indexProduct].stock) {
                console.log("stock de camperas insuficiente")
            } else {
                arrayCarts.push(productToAdd)
                console.log(`añadiste ${cantidad} camperas al carrito`)
            }
            break;

        default:
            alert("no se encontro el producto")
            añadirAlCarrito(prenda, cantidad)
    
    }

}

añadirAlCarrito("remera", 5)
añadirAlCarrito("pantalon", 5)
añadirAlCarrito("campera", 5)
console.log(arrayCarts);

function calcularCompra() {
    let monto = 0
    for (let index = 0; index < arrayCarts.length; index++) {
        monto+= arrayCarts[index].price        
    }
    return monto
}

function finalizar() {
    console.log("Los productos del carrito son:");
    for (let index = 0; index < arrayCarts.length; index++) {
        console.log("-" + arrayCarts[index].name)        
    }
    alert(`El total de la compra es de $${calcularCompra().toFixed(2)}`)
}

calcularCompra()
finalizar()

