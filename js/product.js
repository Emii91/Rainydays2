const resultsContainer = document.querySelector(".results");

const url = "https://flower-power.store/Rainydays/wp-json/wc/store/products";

async function fetchProducts() {

    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

        resultsContainer.innerHTML = "";

        for (let i = 0; i < json.length; i++){

            resultsContainer.innerHTML += ` <a href="newarrivals-item.html?id=${json.id}" class="results">
                                            <img src="${json.images}" />
                                            <div class="name">${json[i].name}</div>
                                            <p class="description">${json[i].description}</p>
                                            <p class="price">${json[i].prices.price}</p>
                                            <button class="add-to-cart">${json[i].add_to_cart.text}</button> 
                                            </a>`;
        }                     
  } catch (error) {
        console.log(error);
   }
}

fetchProducts();
