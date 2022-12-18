document.addEventListener('DOMContentLoaded', function() {
    //async function to fetch products from the public API
    async function fetchProducts(url) {
        const data = await fetch(url);
        const response = await data.json();
        //console.log(response);
        const product_info = `
            <div class="product">
                <img src="" alt="" class="product-image">
                <h2 class="product-title"></h2>
                <h3 class="product-category"></h3>
                <p class="product-description"></p>
                <div class="product-price-container">
                    <h3 class="product-price"></h3>
                    <a href="" class="add-to-cart"></a>
                </div>
            </div>
        `
    }
    //fetchProducts('https://api.escuelajs.co/api/v1/products');
});