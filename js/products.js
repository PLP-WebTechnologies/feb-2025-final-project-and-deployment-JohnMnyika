// Product filtering and display functionality
let filteredProducts = [...products];

// Initialize product display
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    initializeFilters();
});

function displayProducts() {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';

    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-card';
        productElement.innerHTML = `
            <img src="../images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${formatPrice(product.price)}</p>
            <p class="description">${product.description}</p>
            <button onclick="addToCart(${product.id})" class="add-to-cart-btn">
                <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
        `;
        productsGrid.appendChild(productElement);
    });
}

// Sample product data
const products = [
    {
        id: 1,
        name: 'Wireless Headphones',
        price: 9999,
        image: 'wireless_headphones.jpg',
        description: 'High-quality wireless headphones with noise cancellation',
        category: 'Electronics'
    },
    {
        id: 2,
        name: 'Smartwatch',
        price: 19999,
        image: 'smartwatch.jpg',
        description: 'Feature-rich smartwatch with health tracking',
        category: 'Electronics'
    },
    {
        id: 3,
        name: 'Laptop Backpack',
        price: 4999,
        image: 'laptop_backpack.jpg',
        description: 'Water-resistant laptop backpack with multiple compartments',
        category: 'Accessories'
    },
    {
        id: 4,
        name: 'Bluetooth Speaker',
        price: 7999,
        image: 'bt_speaker.jpg',
        description: 'Portable bluetooth speaker with 20-hour battery life',
        category: 'Electronics'
    }
];

function initializeFilters() {
    // Search functionality
    const searchInput = document.getElementById('search-products');
    searchInput.addEventListener('input', filterProducts);

    // Category filter
    const categoryCheckboxes = document.querySelectorAll('.category-filter input');
    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });

    // Price range
    const priceRange = document.getElementById('price-range');
    priceRange.addEventListener('input', updatePriceLabels);
    priceRange.addEventListener('change', filterProducts);

    // Update price range values
    priceRange.min = "0";
    priceRange.max = "50000";
    priceRange.step = "500";
    updatePriceLabels();
}

function updatePriceLabels() {
    const value = document.getElementById('price-range').value;
    document.getElementById('max-price').textContent = formatPrice(parseInt(value));
}

function formatPrice(price) {
    return `KSH ${price.toLocaleString()}`;
}

function filterProducts() {
    const searchTerm = document.getElementById('search-products').value.toLowerCase();
    const selectedCategories = Array.from(document.querySelectorAll('.category-filter input:checked'))
        .map(checkbox => checkbox.value);
    const maxPrice = document.getElementById('price-range').value;

    filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                            product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategories.length === 0 || 
                               selectedCategories.includes(product.category);
        const matchesPrice = product.price <= maxPrice;

        return matchesSearch && matchesCategory && matchesPrice;
    });

    displayProducts();
}