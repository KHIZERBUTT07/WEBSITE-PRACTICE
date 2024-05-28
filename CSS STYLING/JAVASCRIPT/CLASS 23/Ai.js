document.addEventListener('DOMContentLoaded', () => {
    const productId = 1; // Change this to dynamically fetch different products
    const apiUrl = `https://fakestoreapi.com/products/${productId}`;
    const cart = [];

    fetch(apiUrl)
        .then(response => response.json())
        .then(product => {
            const productDetailContainer = document.getElementById('product-detail');

            const productHtml = `
                <div class="product">
                    <img src="${product.image}" alt="${product.title}">
                    <div class="product-details">
                        <h2>${product.title}</h2>
                        <p><span>Price:</span> $${product.price}</p>
                        <p><span>Description:</span> ${product.description}</p>
                        <p><span>Category:</span> ${product.category}</p>
                        <button class="add-to-cart-btn">Add to Cart</button>
                    </div>
                </div>
            `;

            productDetailContainer.innerHTML = productHtml;

            document.querySelector('.add-to-cart-btn').addEventListener('click', () => {
                addToCart(product);
            });
        })
        .catch(error => console.error('Error fetching product data:', error));

    const addToCart = (product) => {
        const cartItem = cart.find(item => item.id === product.id);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCartUI();
    };

    const updateCartUI = () => {
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItemHtml = `
                <li class="cart-item">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="cart-item-details">
                        <p>${item.title}</p>
                        <p>$${item.price}</p>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 'decrease')">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 'increase')">+</button>
                        </div>
                    </div>
                </li>
            `;
            cartItemsContainer.insertAdjacentHTML('beforeend', cartItemHtml);
        });
    };

    window.updateQuantity = (productId, action) => {
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            if (action === 'increase') {
                cartItem.quantity += 1;
            } else if (action === 'decrease' && cartItem.quantity > 1) {
                cartItem.quantity -= 1;
            }
        }
        updateCartUI();
    };

    document.getElementById('cart-icon').addEventListener('click', () => {
        const cartDropdown = document.getElementById('cart-dropdown');
        cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
    });
});
