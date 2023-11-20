const form = document.getElementById('add-product-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const productName = document.getElementById('product-name').value;
  const productDescription = document.getElementById('product-description').value;
  const productImage = document.getElementById('product-image').files[0];
  const productAuthor = document.getElementById('product-author').value;
  const productStars = document.getElementById('product-stars').value;

  const newProduct = {
    name: productName,
    description: productDescription,
    image: URL.createObjectURL(productImage),
    author: productAuthor,
    stars: productStars,
    category: 'Nueva categoría' // Aquí debes agregar la categoría correspondiente
  };

  // Aquí debes agregar el código para agregar el nuevo producto al array correspondiente a la categoría

  // Limpia los campos del formulario
  form.reset();
});
