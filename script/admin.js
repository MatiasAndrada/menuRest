const elmtCoffee = coffee.length;
const elmtJugos = jugos.length;
const elmtComida = comida.length;

console.log(elmtCoffee, elmtComida, elmtJugos)

class product {
    constructor(tipo, price){
        this.tipo = tipo; 
        this.price = price;
    }

    agregarCard(product){
        $("catalogo__items").append()
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