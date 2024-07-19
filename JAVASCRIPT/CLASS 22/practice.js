document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products');
    const orderForm = document.getElementById('orderForm');
    const cartModal = document.getElementById('cart-modal');
    const cartItemsContainer = document.getElementById('cart-items');
    const closeCartButton = document.getElementById('close-cart');
    const buyNowButton = document.getElementById('buy-now');
    const cartButton = document.getElementById('cart-button');
    const sortLowToHighButton = document.getElementById('sort-low-to-high');
    const sortHighToLowButton = document.getElementById('sort-high-to-low');
    const locationButton = document.getElementById('location-button');
    const locationDropdown = document.getElementById('location-dropdown');
    const countryList = document.getElementById('country-list');
    const selectedCountryDiv = document.getElementById('selected-country');
    const selectedFlag = document.getElementById('selected-flag');
    const selectedCountryName = document.getElementById('selected-country-name');
    const cartCount = document.getElementById('cart-count');
    const productDetail = document.getElementById('product-detail');
    const productDetailInfo = document.getElementById('product-detail-info');
    const otherProductsList = document.getElementById('other-products-list');
    const backToProductsButton = document.getElementById('back-to-products');

    let cart = [];
    let products = [];

    // Fetch products from API
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            products = data;
            displayProducts(products);
        })
        .catch(error => console.error('Error fetching products:', error));

    // Function to display products
    function displayProducts(products) {
        productsContainer.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('bg-white', 'p-6', 'rounded-lg', 'shadow-md', 'product-card');
            productCard.setAttribute('data-id', product.id); // Set data-id for each product card

            productCard.innerHTML = `
                <img class="h-40 w-full object-cover mb-4" src="${product.image}" alt="${product.title}">
                <h2 class="text-xl font-bold mb-2">${product.title}</h2>
                <p class="text-gray-700 mb-2">Product ID: ${product.id}</p>
                <p class="text-gray-700 mb-2">$${product.price}</p>
                <p class="text-gray-600 mb-4">${product.description.substring(0, 100)}...</p>
                <button class="bg-blue-500 text-white px-4 py-2 rounded add-to-cart" data-id="${product.id}">Add to Cart</button>
                <button class="bg-green-500 text-white px-4 py-2 rounded buy-now" data-id="${product.id}">Buy Now</button>
            `;

            productsContainer.appendChild(productCard);
        });

        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', (event) => {
                const productId = event.currentTarget.getAttribute('data-id');
                showProductDetail(productId);
            });
        });

        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.getAttribute('data-id');
                addToCart(products.find(product => product.id == productId));
                event.stopPropagation();
            });
        });

        document.querySelectorAll('.buy-now').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.getAttribute('data-id');
                buyNow(products.find(product => product.id == productId));
                event.stopPropagation();
            });
        });
    }

    // Show product detail view
    function showProductDetail(productId) {
        const product = products.find(product => product.id == productId);
        if (!product) return;

        productDetailInfo.innerHTML = `
            <img class="h-60 w-full object-cover mb-4" src="${product.image}" alt="${product.title}">
            <h2 class="text-2xl font-bold mb-2">${product.title}</h2>
            <p class="text-gray-700 mb-2">Product ID: ${product.id}</p>
            <p class="text-gray-700 mb-2">$${product.price}</p>
            <p class="text-gray-600 mb-4">${product.description}</p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded add-to-cart" data-id="${product.id}">Add to Cart</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded buy-now" data-id="${product.id}">Buy Now</button>
        `;

        displayOtherProducts(productId);
        productsContainer.classList.add('hidden');
        productDetail.classList.remove('hidden');

        // Add event listeners for add-to-cart and buy-now buttons in the product detail view
        document.querySelector('.add-to-cart').addEventListener('click', (event) => {
            addToCart(product);
            event.stopPropagation();
        });

        document.querySelector('.buy-now').addEventListener('click', (event) => {
            buyNow(product);
            event.stopPropagation();
        });
    }

    // Display other products in the detailed view
    function displayOtherProducts(excludeProductId) {
        otherProductsList.innerHTML = '';
        products.forEach(product => {
            if (product.id == excludeProductId) return;
            const productCard = document.createElement('div');
            productCard.classList.add('bg-white', 'p-6', 'rounded-lg', 'shadow-md', 'mb-4', 'product-card');
            productCard.setAttribute('data-id', product.id); // Set data-id for each product card

            productCard.innerHTML = `
                <img class="h-40 w-full object-cover mb-4" src="${product.image}" alt="${product.title}">
                <h2 class="text-xl font-bold mb-2">${product.title}</h2>
                <p class="text-gray-700 mb-2">Product ID: ${product.id}</p>
                <p class="text-gray-700 mb-2">$${product.price}</p>
                <p class="text-gray-600 mb-4">${product.description.substring(0, 100)}...</p>
                <button class="bg-blue-500 text-white px-4 py-2 rounded add-to-cart" data-id="${product.id}">Add to Cart</button>
                <button class="bg-green-500 text-white px-4 py-2 rounded buy-now" data-id="${product.id}">Buy Now</button>
            `;

            otherProductsList.appendChild(productCard);
        });

        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', (event) => {
                const productId = event.currentTarget.getAttribute('data-id');
                showProductDetail(productId);
            });
        });

        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.getAttribute('data-id');
                addToCart(products.find(product => product.id == productId));
                event.stopPropagation();
            });
        });

        document.querySelectorAll('.buy-now').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.getAttribute('data-id');
                buyNow(products.find(product => product.id == productId));
                event.stopPropagation();
            });
        });
    }

    // Add to Cart function
    function addToCart(product) {
        const cartItem = cart.find(item => item.id === product.id);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            product.quantity = 1;
            cart.push(product);
        }
        updateCartCount();
        // alert(`${product.title} has been added to the cart.`);
    }

    // Buy Now function
    function buyNow(product) {
        addToCart(product);
        scrollToOrderForm(product.id);
    }

    // Update Cart Count
    function updateCartCount() {
        cartCount.textContent = cart.reduce((total, product) => total + product.quantity, 0);
    }

    // Scroll to Order Form function
    function scrollToOrderForm(productId) {
        document.getElementById('productId').value = productId;
        orderForm.scrollIntoView({ behavior: 'smooth' });
    }

    // Show Cart function
    function showCart() {
        cartItemsContainer.innerHTML = '';

        cart.forEach(product => {
            const cartItem = document.createElement('li');
            cartItem.classList.add('mb-2', 'flex', 'justify-between', 'items-center');
            cartItem.innerHTML = `
                <span>${product.title} - $${product.price} x ${product.quantity}</span>
                <div>
                    <button class="bg-gray-300 text-black px-2 py-1 rounded adjust-quantity" data-id="${product.id}" data-action="decrease">-</button>
                    <button class="bg-gray-300 text-black px-2 py-1 rounded adjust-quantity" data-id="${product.id}" data-action="increase">+</button>
                    <button class="bg-red-500 text-white px-2 py-1 rounded delete-item" data-id="${product.id}">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        cartModal.classList.remove('hidden');

        document.querySelectorAll('.delete-item').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.getAttribute('data-id');
                deleteFromCart(productId);
            });
        });

        document.querySelectorAll('.adjust-quantity').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.getAttribute('data-id');
                const action = event.target.getAttribute('data-action');
                adjustQuantity(productId, action);
            });
        });
    }

    // Adjust Quantity function
    function adjustQuantity(productId, action) {
        const cartItem = cart.find(item => item.id == productId);
        if (action === 'increase') {
            cartItem.quantity++;
        } else if (action === 'decrease' && cartItem.quantity > 1) {
            cartItem.quantity--;
        } else if (action === 'decrease' && cartItem.quantity === 1) {
            deleteFromCart(productId);
            return;
        }
        updateCartCount();
        showCart();
    }

    // Delete from Cart function
    function deleteFromCart(productId) {
        cart = cart.filter(product => product.id != productId);
        updateCartCount();
        showCart();
    }

    // Close Cart function
    closeCartButton.addEventListener('click', () => {
        cartModal.classList.add('hidden');
    });

    // Buy Now button event
    buyNowButton.addEventListener('click', () => {
        alert('Thank you for your purchase!');
        cart = [];
        updateCartCount();
        cartModal.classList.add('hidden');
    });

    // Cart button event
    cartButton.addEventListener('click', () => {
        showCart();
    });

    // Sort buttons event
    sortLowToHighButton.addEventListener('change', () => {
        if (sortLowToHighButton.checked) {
            const sortedProducts = [...products].sort((a, b) => a.price - b.price);
            displayProducts(sortedProducts);
        }
    });

    sortHighToLowButton.addEventListener('change', () => {
        if (sortHighToLowButton.checked) {
            const sortedProducts = [...products].sort((a, b) => b.price - a.price);
            displayProducts(sortedProducts);
        }
    });

    // Location button event to toggle dropdown
    locationButton.addEventListener('click', () => {
        locationDropdown.classList.toggle('hidden');
    });

    // Fetch country data from API
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            displayCountries(data);
        })
        .catch(error => console.error('Error fetching countries:', error));

    // Function to display countries in dropdown
    function displayCountries(countries) {
        countries.sort((a, b) => a.name.common.localeCompare(b.name.common)); // Sort countries alphabetically

        countries.forEach(country => {
            const listItem = document.createElement('li');
            listItem.classList.add('flex', 'items-center', 'mb-2', 'cursor-pointer', 'hover:bg-gray-200', 'p-2', 'rounded');

            listItem.innerHTML = `
                <img src="${country.flags.png}" alt="${country.name.common} flag" class="w-6 h-4 mr-2">
                <span>${country.name.common}</span>
            `;

            listItem.addEventListener('click', () => {
                selectCountry(country);
                locationDropdown.classList.add('hidden');
            });

            countryList.appendChild(listItem);
        });
    }

    // Function to handle country selection
    function selectCountry(country) {
        selectedFlag.src = country.flags.png;
        selectedFlag.alt = `${country.name.common} flag`;
        selectedCountryName.textContent = country.name.common;
        selectedCountryDiv.classList.remove('hidden');
        locationButton.classList.add('hidden');
        selectedCountryDiv.innerHTML = `
            <img src="${country.flags.png}" alt="${country.name.common} flag" class="w-6 h-4 mr-2 inline">
            <span>${country.name.common}</span>
        `;
    }

    // Back to Products button event
    backToProductsButton.addEventListener('click', () => {
        productDetail.classList.add('hidden');
        productsContainer.classList.remove('hidden');
    });

    // Form submit event
    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const shippingAddress = document.getElementById('shippingAddress').value;
        const phone = document.getElementById('phone').value;
        const productId = document.getElementById('productId').value;
        const quantity = document.getElementById('quantity').value;

        console.log(`Email: ${email}`);
        console.log(`Shipping Address: ${shippingAddress}`);
        console.log(`Phone Number: ${phone}`);
        console.log(`Product ID: ${productId}`);
        console.log(`Quantity: ${quantity}`);

        // Additional logic to handle the order submission
        // You can add your own logic to submit this data to a server, etc.

        // Reset form after submission (optional)
        this.reset();
    });
});

    // JavaScript to toggle responsive navigation menu
    document.getElementById('toggleButton').addEventListener('click', function() {
        document.getElementById('responsiveNav').classList.toggle('hidden');
    });
