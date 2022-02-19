const resultsContainer = document.querySelector(".results");

const url = "http://localhost/rainydays/wp-json/wp/v2/pages";

async function fetchProducts() {

try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    resultsContainer.innerHTML = "";

    const newarrivals = json.results;

    newarrivals.forEach(function(newarrivals) {
        resultsContainer.innerHTML += ``

    });

} catch (error) {
    console.log("An error has occurred");
    resultsContainer.innerHTML =  displayError("An error has occurred");
   }

}

fetchProducts();