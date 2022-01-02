var removeItem = document.getElementsByClassName('product-remove');
const cart = document.querySelector(".cart-total");

for (var i = 0; i < removeItem.length; i++) {
    var p = removeItem[i];
    p.addEventListener("click", function(event) {
        var pClicked = event.target;
        pClicked.parentElement.parentElement.remove();
        // updateTotal();

        cart.innerHTML = `<h2 class="h2-js">Shoppingcart is empty</h2>
                          <a href="index.html">Go back</a>`;
    })
};





