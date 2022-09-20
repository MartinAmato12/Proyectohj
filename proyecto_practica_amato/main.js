class Producto{
    constructor(id, nombre, precio, categoria){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
}
    let productos = [
        new Producto (100, "Ryzen 7", 100, "procesador"),
        new Producto (101, "intel i7", 150, "procesador"),
        new Producto (102, "intel i9", 300, "procesador"),
        new Producto (103, "rtx 3060", 400, "grafica"),
        new Producto (104, "amd 6700", 500, "grafica"),
    ];

    let categorias = ["procesador","grafica"];
    let productosEnCarro = [];
    let categoria = "";

while (categoria != "salir" && categoria != null){
    let aux = categorias.join (" o ");
    categoria = prompt("Ingrese la categoria de producto que quiere comprar o ingrese salir para finalizar: \n(" + aux + ")");
    
    if (categoria != "salir" && categoria != null) {
        let productosFiltradoPorCategoria = productos.filter(
         (item) => item.categoria == categoria);

        let cartel = "";
        for (let i = 0; i < productosFiltradoPorCategoria.length; i++) {
        cartel += 
            " id: " +
            productosFiltradoPorCategoria[i].id + 
            " precio: " + 
            productosFiltradoPorCategoria[i].precio + 
            " " +
            " producto: " +
            productosFiltradoPorCategoria[i].nombre +
            "\n"
        }
        
        let idSeleccionado = parseInt(prompt("Seleccione el id del producto que quiere comprar: \n\n" + cartel ));
        let productosParaCarro = productosFiltradoPorCategoria.find(
            item =>item.id === idSeleccionado);

        console.log(productosParaCarro);
    }
}

