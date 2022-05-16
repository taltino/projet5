fetch('http://localhost:3000/api/products')
  .then((res) => res.json())
  .then((data) => addProduct(data));

function addProduct(data1) {
  const imageUrl = data1[0].imageUrl;
  //console.log('ici url images', imageUrl);

  const anchor = document.createElement('a');
  anchor.href = imageUrl;

  const items = document.getElementById('items');
  items.appendChild(anchor);
}
