const listProducts = async () => {
  const response = await fetch('https://mocki.io/v1/e5ed13e3-129f-44d1-ba95-82f7692f7321');
  const products = await response.json();
  const number = products.length;

  let productsList = ``;

  products.forEach((product, i) => {
    productsList += `
      <div class="product">
        <div class="product-img">
          <img src="${product.img}" alt="">
        </div>
        <div class="product-name">${product.name}</div>
        <div class="product-price"> Precio: ${product.precio}</div>
        
        <button type="button" class="btn btn-primary product-btn" data-bs-toggle="modal" data-bs-target="#infoModal${i}">
          Más información
        </button>

        <div class="modal fade" id="infoModal${i}" tabindex="-1" aria-labelledby="infoModalLabel${i}" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="infoModalLabel${i}">${product.name}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img src="${product.img}" alt="">                 
                <p> Aqui va una breve descripción del producto, colores disponibles, tamaños, material, etc
                </p>
                <p>Precio del producto: ${product.precio}</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    `
  });

  document.getElementById('products-list').innerHTML = productsList;
  console.log(number)
  console.log(products);
}

window.addEventListener("load", function () {
  listProducts();
})