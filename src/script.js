document.addEventListener('DOMContentLoaded', function() {

    //create variables
    const url = `https://api.escuelajs.co/api/v1/products`
    const products = document.querySelector('.products');
    let dataset = 0;

    //async function to fetch products from the public API
    async function fetchProducts(url) {
        try {
            const data = await fetch(url);
            dataset += 5;
            if(data.ok) {
                const response = await data.json();

                for(let i = 0; i < response.length; i++) {
                    const description = response[i].description;
                    const title = response[i].title;
                    products.innerHTML += `
                    <div class="product">
                        <img src="${response[i].images[1]}" alt="${response[i].category.name}" class="product-image">
                        <div class="product-content">
                        <h2 class="product-title">${title.length > 18 ? title.substring(0, 18).concat('...') : title}
                        </h2>
                        <h3 class="product-category">${response[i].category.name}</h3>
                        <p class="product-description">${
                            description.length > 80
                            ? description.substring(0, 80).concat(' ...more')
                            : description}
                        </p>
                        <div class="product-price-container">
                            <h3 class="product-price">$${response[i].price}
                            </h3>
                            <a href="" data-productId="${
                                response[i].id}" class="add-to-cart"><ion-icon name="cart-outline"></ion-icon></a>
                        </div>
                        </div>
                    </div>
                    `
                }

            } 

        }
        catch (err) {
            console.log(err);
        }
    }
    fetchProducts(url);
});