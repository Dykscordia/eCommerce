
class Product {

    static idCounter = 1;

    constructor(name, author, url, stars, image, category) {
        this.id = Product.idCounter++;
        this.name = name;
        this.author = author;
        this.url = url;
        this.stars = stars;
        this.image = image;
        this.category = category;
    }
}



     const imageProducts = [
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-1.jpg', '★★★★☆', 'img/images/imagen-producto-1.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-2.jpg', '★★★★☆', 'img/images/imagen-producto-2.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-3.jpg', '★★★★☆', 'img/images/imagen-producto-3.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-4.jpg', '★★★★☆', 'img/images/imagen-producto-4.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-5.jpg', '★★★★☆', 'img/images/imagen-producto-5.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-6.jpg', '★★★★☆', 'img/images/imagen-producto-6.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-7.jpg', '★★★★☆', 'img/images/imagen-producto-7.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-8.jpg', '★★★★☆', 'img/images/imagen-producto-8.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-9.jpg', '★★★★☆', 'img/images/imagen-producto-9.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-10.jpg', '★★★★☆', 'img/images/imagen-producto-10.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-11.jpg', '★★★★☆', 'img/images/imagen-producto-11.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-12.jpg', '★★★★☆', 'img/images/imagen-producto-12.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-13.jpg', '★★★★☆', 'img/images/imagen-producto-13.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-14.jpg', '★★★★☆', 'img/images/imagen-producto-14.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-15.jpg', '★★★★☆', 'img/images/imagen-producto-15.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-16.jpg', '★★★★☆', 'img/images/imagen-producto-16.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-17.jpg', '★★★★☆', 'img/images/imagen-producto-17.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-18.jpg', '★★★★☆', 'img/images/imagen-producto-18.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-19.jpg', '★★★★☆', 'img/images/imagen-producto-19.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-20.jpg', '★★★★☆', 'img/images/imagen-producto-20.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-21.jpg', '★★★★☆', 'img/images/imagen-producto-21.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-22.jpg', '★★★★☆', 'img/images/imagen-producto-22.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-23.jpg', '★★★★☆', 'img/images/imagen-producto-23.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-24.jpg', '★★★★☆', 'img/images/imagen-producto-24.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-25.jpg', '★★★★☆', 'img/images/imagen-producto-25.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-26.jpg', '★★★★☆', 'img/images/imagen-producto-26.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-27.jpg', '★★★★☆', 'img/images/imagen-producto-27.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-28.jpg', '★★★★☆', 'img/images/imagen-producto-28.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-29.jpg', '★★★★☆', 'img/images/imagen-producto-29.jpg', 'Texturas'),
        new Product('Textures', 'Textures Creator', 'img/images/imagen-producto-30.jpg', '★★★★☆', 'img/images/imagen-producto-30.jpg', 'Texturas'),
        new Product('3D Cubes', 'RenderStudio', 'img/images/imagen-producto-31.jpg', '★★★★☆', 'img/images/imagen-producto-31.jpg', 'Render'),
        new Product('3D Room', 'Render Creator', 'img/images/imagen-producto-32.jpg', '★★★★☆', 'img/images/imagen-producto-32.jpg', 'Render'),
        new Product('Background Render', 'Textures Creator', 'img/images/imagen-producto-33.jpg', '★★★★☆', 'img/images/imagen-producto-33.jpg', 'Render'),
        new Product('RenderMap', 'Textures Creator', 'img/images/imagen-producto-34.jpg', '★★★★☆', 'img/images/imagen-producto-34.jpg', 'Render'),
        new Product('apple png', 'Textures Creator', 'img/images/imagen-producto-35.jpg', '★★★★☆', 'img/images/imagen-producto-35.jpg', 'PNG'),
        new Product('smoke png', 'Textures Creator', 'img/images/imagen-producto-36.jpg', '★★★★☆', 'img/images/imagen-producto-36.jpg', 'PNG'),
        new Product('flor png', 'Textures Creator', 'img/images/imagen-producto-37.jpg', '★★★★☆', 'img/images/imagen-producto-37.jpg', 'PNG'),
        new Product('sky png', 'Textures Creator', 'img/images/imagen-producto-38.jpg', '★★★★☆', 'img/images/imagen-producto-38.jpg', 'PNG'),
        new Product('background png', 'Textures Creator', 'img/images/imagen-producto-39.jpg', '★★★★☆', 'img/images/imagen-producto-39.jpg', 'PNG'),
        new Product('the moon png', 'Textures Creator', 'img/images/imagen-producto-40.jpg', '★★★★☆', 'img/images/imagen-producto-40.jpg', 'PNG'),

        // Otros productos...
    ];
    
     const videoProducts = [
        new Product('Video 1', 'Author 1', 'img/images/imagen-producto-40.jpg', '★★★★☆', 'img/videos/imagen-producto-1.jpg', 'Videos'),
        new Product('Video 2', 'Author 1', 'img/images/imagen-producto-40.jpg', '★★★★☆', 'img/videos/imagen-producto-2.jpg', 'Videos'),
        new Product('Video 3', 'Author 1', 'img/images/imagen-producto-40.jpg', '★★★★☆', 'img/videos/imagen-producto-3.jpg', 'Videos'),
        new Product('Video 4', 'Author 1', 'img/images/imagen-producto-40.jpg', '★★★★☆', 'img/videos/imagen-producto-4.jpg', 'Videos'),
        new Product('Video 5', 'Author 1', 'img/images/imagen-producto-40.jpg', '★★★★☆', 'img/videos/imagen-producto-5.jpg', 'Videos'),
        new Product('Video 6', 'Author 1', 'img/images/imagen-producto-40.jpg', '★★★★☆', 'img/videos/imagen-producto-6.jpg', 'Videos'),

        // Otros productos de video...
    ];
 
     const fontProducts = [
        new Product('Glore Spako', 'Alon Kelakon', 'download/fonts/glore-spako.zip', '★★★★☆','img/fonts/imagen-producto-1.jpg', 'Bold'),
        // Otros productos de fuentes...
    ];
    
     const softwareProducts = [
        new Product('Software 1', 'Author 1', 'software/software-producto-1.exe', '★★★★☆', 'Software & More'),
        // Otros productos de software...
    ];

    export { imageProducts, videoProducts, fontProducts, softwareProducts, Product };

document.addEventListener('DOMContentLoaded', function () {
    
    //Creo constante de la seccion store 

    const imageStoreSection = document.querySelector('#image-store');
    const videoStoreSection = document.querySelector('#videos-store');
    const fontStoreSection = document.querySelector('#font-store');
    const softwareStoreSection = document.querySelector('#software-store');


     
   
    function renderProducts(productList, productsToRender) {
        // Limpia el contenido actual de sección store 
        productList.innerHTML = '';

        // Itera sobre la lista de productos y crea elementos para cada uno
        productsToRender.forEach(product => {
            //Nuevo elemento div html almacenado en la variable productElement
            const productElement = document.createElement('div');
            //Asignarle a ese mismo elemento la clase product
            productElement.classList.add('product');

            // Colocamos nuestro codigo html del producto dentro de ese div
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

            // Agrega el elemento al contenedor productList
            productList.appendChild(productElement);
        });
    }

    // Inicializar la lista de productos
    // Obtiene el título de la página actual
    const pageTitle = document.title;

    if (pageTitle === 'Página de Imágenes') {
        renderProducts(imageStoreSection, imageProducts);
    } else if (pageTitle === 'Página de Videos') {
        renderProducts(videoStoreSection, videoProducts);
    } else if (pageTitle === 'Página de Fuentes') {
        renderProducts(fontStoreSection, fontProducts);
    } else if (pageTitle === 'Página de Software & More') {
        renderProducts(softwareStoreSection, softwareProducts);
    }

    // Obtenemos el input de búsqueda y lo almacenamos en una variable
    const searchInput = document.getElementById('buscador');
    


    // Escucha el evento de cambio en el input de búsqueda
    searchInput.addEventListener('input', function () {
        // Filtra y renderiza los productos basados en el término de búsqueda
        //Almacenamos lo que el usuario ingresa en el buscado en una variable
        const searchTerm = searchInput.value.toLowerCase();
        //Crea un nuevo Array identico a products pero que contenga solo los prodcutos que cumplan las condiciones
        const activeProductsObj = getActiveProducts();
        const activeProducts = activeProductsObj.activeProducts;
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

    // obtenemos boton de categorias
    const categoryButtons = document.querySelectorAll('.category-button');

    function getActiveProducts() {
        const pageTitle = document.title;
        let activeProducts;
    
        if (pageTitle === 'Página de Imágenes') {

            activeProducts = imageProducts;
        } else if (pageTitle === 'Página de Videos') {

            activeProducts = videoProducts;
        } else if (pageTitle === 'Página de Fuentes') {

            activeProducts = fontProducts;
        } else if (pageTitle === 'Página de Software & More') {

            activeProducts = softwareProducts;
        }
    
        return { activeProducts };
    }

    function getActiveStoreSection() {
        const pageTitle = document.title;
        let activeSection;
    
        if (pageTitle === 'Página de Imágenes') {
            activeSection = imageStoreSection;
        } else if (pageTitle === 'Página de Videos') {
            activeSection = videoStoreSection;
        } else if (pageTitle === 'Página de Fuentes') {
            activeSection = fontStoreSection;
        } else if (pageTitle === 'Página de Software & More') {
            activeSection = softwareStoreSection;
        }
    
        return activeSection;
    }

    
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Obtén la categoría del botón clicado
            const category = button.getAttribute('data-category');
            
            // Define una función para filtrar los productos por categoría
            function filterProductsByCategory(products, category) {
                return products.filter(product => product.category === category);
            }

            let filteredProducts = [];

            // Determina la categoría y filtra los productos correspondientes
            if (pageTitle === 'Página de Imágenes') {
                filteredProducts = filterProductsByCategory(imageProducts, category);
            } else if (pageTitle === 'Página de Videos') {
                filteredProducts = filterProductsByCategory(videoProducts, category);
            } else if (pageTitle === 'Página de Fuentes') {
                filteredProducts = filterProductsByCategory(fontProducts, category);
            } else if (pageTitle === 'Página de Software & More') {
                filteredProducts = filterProductsByCategory(softwareProducts, category);
            }

            // Renderiza los productos filtrados
            renderProducts(getActiveStoreSection(), filteredProducts);
        });
    });











});



