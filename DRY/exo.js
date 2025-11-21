const products = [
  { name: 'Clavier gaming', price: 79, inStock: true, onSale: false },
  { name: 'Souris sans fil', price: 49, inStock: true, onSale: true },
  { name: 'Écran 27"', price: 249, inStock: false, onSale: true },
  { name: 'Casque audio', price: 129, inStock: true, onSale: false }
];

const listEl = document.querySelector('#products-list');
const emptyStateEl = document.querySelector('#empty-state');

const showAllBtn = document.querySelector('#show-all-btn');
const inStockBtn = document.querySelector('#in-stock-btn');
const onSaleBtn = document.querySelector('#on-sale-btn');

function renderProducts(filtered, emptyMessage) {
  listEl.innerHTML = '';

  if (filtered.length === 0) {
    emptyStateEl.textContent = emptyMessage;
    emptyStateEl.style.display = 'block';
    return;
  }

  emptyStateEl.style.display = 'none';

  filtered.forEach(product => {
    const li = document.createElement('li');
    li.className = 'product-card';
    li.innerHTML = `
      <h3>${product.name}</h3>
      <p>Prix : ${product.price} €</p>
    `;
    listEl.appendChild(li);
  });
}

function showAll() {
  renderProducts(products, 'Aucun produit à afficher.');
}

function showInStock() {
  renderProducts(products.filter(p => p.inStock), 'Aucun produit en stock.');
}

function showOnSale() {
  renderProducts(products.filter(p => p.onSale), 'Aucun produit en promotion.');
}

showAllBtn.addEventListener('click', showAll);
inStockBtn.addEventListener('click', showInStock);
onSaleBtn.addEventListener('click', showOnSale);
