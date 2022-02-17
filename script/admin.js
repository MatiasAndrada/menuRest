const elmtCoffee = coffee.length;
const elmtJugos = jugos.length;
const elmtComida = comida.length;

$("#breakfastBtn").click(() => {
    new Producto(coffee);

})






/*    for(const producto of coffee){
        $("#prdt").append(`
            <div class="card-body col-3 m-1 bg-info text-white text-center">
            <h3> ${producto.tipo} </h3>
            <p> Precio: ${producto.precio} </p>
            <button class="btn btn-success">+</button>
            <div>`)
        }*/

