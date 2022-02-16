const elmtCoffee = coffee.length;
const elmtJugos = jugos.length;
const elmtComida = comida.length;

for(const producto of coffee){
    const itemProduct = $(".catalogo").add("div").addClass("catalogo__items card-body")
    $(itemProduct).append(`
    <h2> Porducto: ${producto.tipo} </h2>
    <p> Precio: ${producto.precio} </p>
    `)
    $("catalogo").append(itemProduct)
}

class product {
    constructor(tipo, price){
        this.tipo = tipo; 
        this.price = price;
    }

    agregarProduct(product){
        $(".catalogo").prepend(`
        <h2>COMIDAAA<h2>
        <p>parrafo<p>
        `)
    }
}

/*
agregarCard(user){
    const card = document.createElement("div")
    card.classList.add("item--card")
    card.innerHTML = usuario.getHTML(user.name, user.surname, user.email, user.telephone)
    this.nodo.appendChild(card)
    this.array.push(user)
}
*/