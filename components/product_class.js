class Producto {
    constructor(array){
        this.array = array;
        this.pushCard()
    }
    
    pushCard(){
        for(const producto of this.array){
            $("#prdt").append(`
                <div class="card-body col-3 m-1 bg-info text-white text-center">
                <h3> ${producto.tipo} </h3>
                <p> Precio: ${producto.precio} </p>
                <button class="btn btn-success">+</button>
                <div>`)
            }
    }

}