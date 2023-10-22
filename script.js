//Escucha de evento para que ejecute el script cuando todo el dom este completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    //Creo constante de la seccion store 
    const storeSection = document.querySelector('.store');

    // Array de Productos
    const products = [
        { name: 'Teenage Font', author: 'New Display Fonts', price: 'FREE', stars: '★★★★☆', image: 'img/imagen-producto-1.jpg' },
        { name: 'Orange 3D', author: 'BlenderCreator01', price: '$300 ARS', stars: '★★★☆☆', image: 'img/imagen-producto-2.jpg' },
        { name: 'E-book JavaScript: The Good Parts', author: 'Douglas Crockford', price: '$10.000 ARS', stars: '★★★★★', image: 'img/imagen-producto-3.jpg' },
        { name: 'Product 4', author: 'Author 4', price: '$20 ARS', stars: '★★★☆☆', image: 'img/imagen-producto-4.jpg' },
        { name: 'Product 5', author: 'Author 5', price: '$50 ARS', stars: '★★★★★', image: 'img/imagen-producto-5.jpg' },
        { name: 'Product 6', author: 'Author 6', price: '$15 ARS', stars: '★★★★☆', image: 'img/imagen-producto-6.jpg' },
        { name: 'Product 7', author: 'Author 7', price: '$30 ARS', stars: '★★★☆☆', image: 'img/imagen-producto-7.jpg' },
        { name: 'Product 8', author: 'Author 8', price: '$25 ARS', stars: '★★★★★', image: 'img/imagen-producto-8.jpg' },
        { name: 'Product 9', author: 'Author 9', price: '$40 ARS', stars: '★★★★☆', image: 'img/imagen-producto-9.jpg' },
        { name: 'Product 10', author: 'Author 10', price: '$18 ARS', stars: '★★★☆☆', image: 'img/imagen-producto-10.jpg' },
        { name: 'Product 11', author: 'Author 11', price: '$60 ARS', stars: '★★★★★', image: 'img/imagen-producto-11.jpg' },
        { name: 'Product 12', author: 'Author 12', price: '$22 ARS', stars: '★★★★☆', image: 'img/imagen-producto-12.jpg' },
        { name: 'Product 13', author: 'Author 13', price: '$45 ARS', stars: '★★★☆☆', image: 'img/imagen-producto-13.jpg' },
        { name: 'Product 14', author: 'Author 14', price: '$27 ARS', stars: '★★★★★', image: 'img/imagen-producto-14.jpg' },
        { name: 'Product 15', author: 'Author 15', price: '$35 ARS', stars: '★★★★☆', image: 'img/imagen-producto-15.jpg' }
    ];

  
    function renderProducts(productList, productsToRender) {
        // Limpia el contenido actual de sección store 
        productList.innerHTML = '';

        // Itera sobre la lista de productos y crea elementos para cada uno
        productsToRender.forEach(product => {
            //nuevo elemento div html almacenado en la variable productElement
            const productElement = document.createElement('div');
            //asignarle a ese mismo elemento la clase product
            productElement.classList.add('product');

            // Colocamos nuestro codigo html del producto dentro de ese div
            productElement.innerHTML = `
                <div class="img-product">
                    <img src="${product.image}" alt="${product.name}">
                </div> 
                <div class="description">
                    <h3>${product.name}</h3>
                    <p class="author">${product.author}</p>
                    <span class="price">${product.price}</span>
                    <p class="stars">${product.stars}</p>
                </div>
            `;

            // Agrega el elemento al contenedor productList
            productList.appendChild(productElement);
        });
    }

    // Inicializar la lista de productos
    renderProducts(storeSection, products);

    // Crear constante del input de búsqueda
    const searchInput = document.getElementById('buscador');

    // Escucha el evento de cambio en el input de búsqueda
    searchInput.addEventListener('input', function () {
        // Filtra y renderiza los productos basados en el término de búsqueda
        //Almacenamos lo que el usuario ingresa en el buscado en una variable
        const searchTerm = searchInput.value.toLowerCase();
        //Crea un nuevo Array identico a products pero que contenga solo los prodcutos que cumplan las condiciones
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm) || 
        product.author.toLowerCase().includes(searchTerm));
        renderProducts(storeSection, filteredProducts);
    });
});