class producto {
    constructor(array){
        
        this.pushCard(array)
    }
    
    
    pushCard(array){
        for (const p of array){
            $("#prdt").append(`
                <div class="card-body col-3 m-1 bg-info text-white text-center">
                <h3> ${p.tipo} </h3>
                <p> Precio: ${p.precio} </p>
                <button class="btn btn-success">+</button>
                <div>`)
            }
    }

}