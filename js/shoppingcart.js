var removeItem = document.getElementsByClassName('product-remove');

for (var i = 0; i < removeItem.length; i++) {
    var p = removeItem[i];
    p.addEventListener("click", function(event) {
        var pClicked = event.target;
        pClicked.parentElement.parentElement.parentElement.remove();
        // updateTotal();
    })
};

