import { imageProducts, videoProducts, fontProducts, softwareProducts, Product } from './productos.js';

    document.addEventListener('DOMContentLoaded', function () {
        const pageTitle = document.title;
        
        const imageStoreSection = document.querySelector('#image-store');
        const videoStoreSection = document.querySelector('#videos-store');
        const fontStoreSection = document.querySelector('#font-store');
        const softwareStoreSection = document.querySelector('#software-store');
    
        function renderProducts(productList, productsToRender) {
            productList.innerHTML = '';
            productsToRender.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <a href="Ptemplate.html?productID=${encodeURIComponent(product.id)}">
                        <div class="img-product">
                            <img src="${product.image}" alt="${product.name}">
                        </div> 
                        <div class="description">
                            <h3>${product.name}</h3>
                            <p class="author">${product.author}</p>
                            <p class="stars">${product.stars}</p>
                        </div>
                    </a>
                `;
                productList.appendChild(productElement);
            });
        }
    
        function getActiveProducts() {
            if (pageTitle === 'Página de Imágenes') {
                return imageProducts;
            } else if (pageTitle === 'Página de Videos') {
                return videoProducts;
            } else if (pageTitle === 'Página de Fuentes') {
                return fontProducts;
            } else if (pageTitle === 'Página de Software & More') {
                return softwareProducts;
            }
        }
    
        function getActiveStoreSection() {
            if (pageTitle === 'Página de Imágenes') {
                return imageStoreSection;
            } else if (pageTitle === 'Página de Videos') {
                return videoStoreSection;
            } else if (pageTitle === 'Página de Fuentes') {
                return fontStoreSection;
            } else if (pageTitle === 'Página de Software & More') {
                return softwareStoreSection;
            }
        }
    
        renderProducts(getActiveStoreSection(), getActiveProducts());
    
        const searchInput = document.getElementById('buscador');
        searchInput.addEventListener('input', function () {
            const searchTerm = searchInput.value.toLowerCase();
            const activeProducts = getActiveProducts();
            if (Array.isArray(activeProducts)) {
                const filteredProducts = activeProducts.filter(product =>
                    product.name.toLowerCase().includes(searchTerm) ||
                    product.author.toLowerCase().includes(searchTerm)
                );
                renderProducts(getActiveStoreSection(), filteredProducts);
            } else {
                console.error('activeProducts is not an array:', activeProducts);
            }
        });
    
        const categoryButtons = document.querySelectorAll('.category-button');
        categoryButtons.forEach(button => {
            button.addEventListener('click', function () {
                const category = button.getAttribute('data-category');
                const filteredProducts = getActiveProducts().filter(product =>
                    product.category === category
                );
                renderProducts(getActiveStoreSection(), filteredProducts);
            });
        })
    })
