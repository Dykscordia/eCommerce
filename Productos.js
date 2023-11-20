// module.js

const Product {
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
  
  module.exports = {
    Product,
    imageProducts,
    videoProducts,
    fontProducts,
    softwareProducts
  };
  