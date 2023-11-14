// Productos.js

export class Product {
    constructor(name, author, url, stars, image, category) {
        this.name = name;
        this.author = author;
        this.url = url;
        this.stars = stars;
        this.image = image;
        this.category = category;
    }
}


    const imageProducts = [
        new Product('Teenage Font', 'New Display Fonts', 'img/imagen-producto-1.jpg', '★★★★☆', 'img/imagen-producto-1.jpg', 'PNG'),
        new Product('Orange 3D', 'BlenderCreator01', 'img/imagen-producto-2.jpg', '★★★☆☆', 'img/imagen-producto-2.jpg', 'Video'),
        // Otros productos...
    ];
    
    const videoProducts = [
        new Product('Video 1', 'Author 1', 'img/imagen-producto-15.jpg', '★★★★☆', 'img/imagen-producto-15.jpg', 'Videos'),
        // Otros productos de video...
    ];
    
    const fontProducts = [
        new Product('Font 1', 'Author 1', 'fonts/font-producto-1.ttf', '★★★★☆', 'Fonts'),
        // Otros productos de fuentes...
    ];
    
    const softwareProducts = [
        new Product('Software 1', 'Author 1', 'software/software-producto-1.exe', '★★★★☆', 'Software & More'),
        // Otros productos de software...
    ];
    
