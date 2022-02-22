class producto {
    constructor(array){
        
        this.pushCard(array)
    }
    
    
    pushCard(array){
        for (const p of array){
            $("#prdt").append(`
            <div class="card" style="width: 20rem;">
                <img class="card-img-top img fluid" src="img/headerIcon.png" alt="Card imagen"
                <div class="card-block">
                    <h3 class="card-title fs-3"> ${p.tipo} </h3>
                    <b class="fw-bold p-2">${p.precio} </b>
                    <a class="btn btn-outline-success btn-block">+</a>
                <div>
            <div>`)
            }
    }

}

//Agregar un header a la card con .card-header cuando este en el carrito 
