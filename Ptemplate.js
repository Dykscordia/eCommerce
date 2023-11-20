import { imageProducts, videoProducts, fontProducts, softwareProducts } from './script.js';

document.addEventListener('DOMContentLoaded', function () {
    const productId = new URLSearchParams(window.location.search).get('productID');
    const product = findProductById(productId);

    const productImage = document.getElementById('product-image');
    const productNameElement = document.getElementById('product-name');
    const productAuthorElement = document.getElementById('product-author');
    const productStarsElement = document.getElementById('product-stars');
    const downloadLink = document.querySelector('#downloadLink');


    if (product) {
        productImage.src = product.image;
        productImage.alt = product.name;
        productNameElement.textContent = product.name;
        productAuthorElement.textContent = product.author;
        productStarsElement.textContent = product.stars;
        downloadLink.href = product.url;
    } else {
        console.error('Producto no encontrado');
    }
});

function findProductById(productId) {
    const allProducts = [...imageProducts, ...videoProducts, ...fontProducts, ...softwareProducts];
    const parsedProductId = parseInt(productId, 10);

    return allProducts.find(product => product.id === parsedProductId);
}
