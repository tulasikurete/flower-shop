let cart = [];

(() => {
  const serializedCart = localStorage.getItem("cart") ?? "[]";
  cart = JSON.parse(serializedCart);
})();

function addToCart(item) {
  const existingItemIndex = cart.findIndex(
    (cartItem) => cartItem.name === item.name
  );
  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += 1;
  } else {
    cart.push({
      ...item,
      quantity: counter,
    });
  }
  console.log({ cart });

  localStorage.setItem("cart", JSON.stringify(cart));
}

function createProduct(flower, i) {
  // const root = document.querySelector("#root");
  const div = document.createElement("div");

  const anchor = document.createElement("a");
  anchor.setAttribute("href", `/productpage.html?id=${i}`);
  div.appendChild(anchor);

  const img = document.createElement("img");
  img.setAttribute("src", flower.image);
  img.style.width = "200px";

  const itemDetails = document.createElement("div");
  itemDetails.classList.add("itemdetails");

  const itemDetail = document.createElement("div");
  itemDetail.classList.add("itemdetail");
  const price = document.createElement("p");
  price.innerHTML = flower.price;
  price.classList.add("price");

  const name = document.createElement("p");
  name.innerHTML = flower.name;
  itemDetail.append(name, price);
  itemDetails.append(img, itemDetail);
  const quantity = document.createElement("p");
  quantity.innerHTML = flower.quantity;

  const sub = document.createElement("button");
  sub.innerHTML = "-";

  const add = document.createElement("button");
  add.innerHTML = "+";

  let counter = flower.quantity;

  //addelement = document.getElementById("add");
  add.addEventListener("click", function () {
    if (counter < 10) {
      counter = counter + 1;
      quantity.innerHTML = counter;
      cart[i].quantity = counter;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  });

  sub.addEventListener("click", function () {
    if (counter > 0) {
      counter = counter - 1;

      quantity.innerHTML = counter;
      cart[i].quantity = counter;
    }
    if (cart[i].quantity <= 0) {
      cart.splice(i, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  });

  div.append(itemDetails, add, quantity, sub);
  return div;
}

function createCart() {
  const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
  const cartRoot = document.querySelector("#cartroot");
  cart.forEach((flower, i) => {
    const cartItemEl = createProduct(flower, i);
    cartRoot.appendChild(cartItemEl);
  });

  if (cart.length === 0) {
    cartRoot.innerHTML = "<h2>Cart is empty</h2>";
  }

  const cartTotal = total();
  cartRoot.append(cartTotal);
}
function total() {
  const divTotal = document.createElement("div");
  divTotal.classList.add("total");
  const p = document.createElement("p");
  p.innerHTML = "Total";

  const total = document.createElement("p");
  let sumOfTotal = 0;

  cart.forEach((product) => {
    const subTotal = product.price * product.quantity;
    sumOfTotal += subTotal;
  });
  total.innerHTML = sumOfTotal + "$";
  divTotal.append(p, total);
  return divTotal;
}
