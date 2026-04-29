let cartCount = 0;

document.addEventListener("click", function(e) {
  if (e.target.classList.contains("add-to-cart")) {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;

    const name = e.target.getAttribute("data-name");
    const price = e.target.getAttribute("data-price");

    document.getElementById("empty-cart").style.display = "none";

    const cartItem = document.createElement("div");
    cartItem.classList.add("w3-panel", "w3-border", "w3-padding");
   cartItem.innerHTML = `
  <h4>${name}</h4>
  <p>$${price}.00</p>
`;
    document.getElementById("cart-items").appendChild(cartItem);

    window.location.hash = "#cart";
  }
});
