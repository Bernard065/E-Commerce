document.addEventListener('DOMContentLoaded', function() {
    //async function to fetch products from the public API
    async function fetchProducts(url) {
        const data = await fetch(url);
        const response = await data.json();
        //console.log(response);
    }
    //fetchProducts('https://api.escuelajs.co/api/v1/products');
});