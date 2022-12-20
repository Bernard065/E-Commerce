document.addEventListener('DOMContentLoaded', function() {

    //create variables
    const url = `https://api.escuelajs.co/api/v1/products?offset=0&limit=5`
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
                }

            } 

        }
        
        
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