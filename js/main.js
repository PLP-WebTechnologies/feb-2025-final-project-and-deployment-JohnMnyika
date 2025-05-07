// Sample product data
const products = [
    {
        id: 1,
        name: 'Wireless Headphones',
        price: 9999,
        image: 'images/wireless_headphones.jpg',
        description: 'High-quality wireless headphones with noise cancellation'
    },
    {
        id: 2,
        name: 'Smartwatch',
        price: 19999,
        image: 'images/smartwatch.jpg',
        description: 'Feature-rich smartwatch with health tracking'
    },
    {
        id: 3,
        name: 'Laptop Backpack',
        price: 4999,
        image: 'images/laptop_backpack.jpg',
        description: 'Water-resistant laptop backpack with multiple compartments'
    },
    {
        id: 4,
        name: 'Bluetooth Speaker',
        price: 7999,
        image: 'images/bt_speaker.jpg',
        description: 'Portable bluetooth speaker with 20-hour battery life'
    }
];

// Cart functionality
let cart = [];

// Update price display function
function formatPrice(price) {
    return `KSH ${price.toLocaleString()}`;
}

// Display featured products
function displayFeaturedProducts() {
    const featuredProducts = document.getElementById('featured-products');
    featuredProducts.innerHTML = ''; // Clear existing products
    
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-card';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${formatPrice(product.price)}</p>
            <p class="description">${product.description}</p>
            <button onclick="addToCart(${product.id})" class="add-to-cart-btn">Add to Cart</button>
        `;
        featuredProducts.appendChild(productElement);
    });
}

// Add to cart functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCartCount();
        showNotification(`${product.name} added to cart!`);
    }
}

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Calculate cart total
function calculateCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayFeaturedProducts();
    updateCartCount();
});