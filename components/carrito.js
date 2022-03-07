function searchButtons() {
  const addButton = document.querySelectorAll(".addToCart");
  addButton.forEach((addToCart) => {
    addToCart.addEventListener("click", addToCartClicked);
  });
}
const comprarButton = document.querySelector(".comprarButton");
comprarButton.addEventListener("click", comprarButtonClicked);


const shoppingCartItemsContainer = document.querySelector(
  ".shoppingCartItemsContainer"
);

function addToCartClicked(event) {
  const button = event.target;
  const item = button.closest(".card");
  const itemTitle = item.querySelector(".card-title").innerText;

  const itemPrice = item.querySelector(".price").textContent;
  const itemImg = item.querySelector(".img").src;
  addItemToCart(itemTitle, itemPrice, itemImg);
}

function addItemToCart(itemTitle, itemPrice, itemImg) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    "shoppingCartItemTitle"
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        ".shoppingCartItemQuantity"
      );
      elementQuantity.value++;
      $('.toast').toast('show');
      updatePriceTotal();
      return;
    }
  }
  const shoppingCartRow = document.createElement("div");
  const shoppingCartContent = `
  <div class="row shoppingCartItem">
                    <div class="col-6">
                        <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                            <img src=${itemImg} class="shopping-cart-image shoppingCartImg">
                            <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}
                            </h6>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                            <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div
                            class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                            <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                                value="1">
                            <button class="btn btn-danger buttonDelete" type="button">X</button>
                        </div>
                    </div>
                </div>
  `;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow
    .querySelector(".buttonDelete")
    .addEventListener("click", removeItemCart);

  shoppingCartRow
    .querySelector(".shoppingCartItemQuantity")
    .addEventListener("change", quantityChanged);
  updatePriceTotal();
}
function updatePriceTotal() {
  let total = 0;
  const cartTotal = document.querySelector(".shoppingCartTotal");
  const cartItems = document.querySelectorAll(".shoppingCartItem");
  cartItems.forEach((shoppingCartItem) => {
    const cartItemElement = shoppingCartItem.querySelector(
      ".shoppingCartItemPrice"
    );
    const cartPriceItem = Number(cartItemElement.textContent.replace("$", ""));
    const itemQuantity = shoppingCartItem.querySelector(
      ".shoppingCartItemQuantity"
    );
    const itemQuantityValue = Number(itemQuantity.value);

    total = total + cartPriceItem * itemQuantityValue;
  });
  cartTotal.innerHTML = `${total.toFixed(2)}$`;
}
function removeItemCart(evt) {
  const buttonCliked = evt.target;
  buttonCliked.closest(".shoppingCartItem").remove();
  updatePriceTotal();
}
function quantityChanged(evt) {
  const input = evt.target;
  if (input.value <= 0) {
    input.value = 1;
  }
  updatePriceTotal();
}
function comprarButtonClicked () {
  shoppingCartItemsContainer.innerHTML = "";
  updatePriceTotal();
}
