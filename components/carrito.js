const addButton = document.querySelectorAll(".addToCart");
console.log("🦇 ~ file: carrito.js ~ line 2 ~ addButton", addButton)
addButton.forEach((addToCart)=>{
    addToCart.addEventListener("change", () => console.log("clickee"))
})






function addToCartClicked(event) {
  console.log("se llamo");
  const button = event.target;
  console.log(
    "🦇 ~ file: carrito.js ~ line 10 ~ addToCartClicked ~ button",
    button
  );
}
